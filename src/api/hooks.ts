import { CustomModule, CustomGuildInfo } from '../config/types';
import { QueryClient, useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { UserInfo, getGuild, getGuilds, fetchUserInfo, fetchUserInfoSafe } from '@/api/discord';
import {
  disableModule,
  enableModule,
  fetchGuildChannels,
  fetchGuildInfo,
  fetchGuildRoles,
  getModule,
  updateModule,
} from '@/api/bot';
import { GuildInfo } from '@/config/types';
import { useAccessToken, useSession, useSessionTemp } from '@/utils/auth/hooks';

export const client = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: 0,
    },
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: 0,
    },
  },
});

export const Keys = {
  login: ['login'],
  guild_info: (guild: string) => ['guild_info', guild],
  modules: (guild: string, module: string) => ['module', guild, module],
  guildRoles: (guild: string) => ['gulid_roles', guild],
  guildChannels: (guild: string) => ['gulid_channel', guild],
};

export const Mutations = {
  updateModule: (guild: string, id: string) => ['module', guild, id],
};

export function useGuild(id: string) {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ['guild', id],
    queryFn: () => getGuild(accessToken as string, id),
    enabled: accessToken != null
  });
}

export function useGuilds() {
  const accessToken = useAccessToken();

  return useQuery({
    queryKey: ['user_guilds'],
    queryFn: () => getGuilds(accessToken as string),
    enabled: accessToken != null
  });
}

export function useSelfUserQuery() {
  const accessToken = useAccessToken();

  return useQuery<UserInfo>({
    queryKey: ['users', 'me'],
    queryFn: () => fetchUserInfo(accessToken!!),
    enabled: accessToken != null,
    staleTime: Infinity
  });
}

export function useSelfUserQuerySafe() {
  const { status, session } = useSessionTemp();

  const accessToken = status == 'unauthenticated' ? '0' : session?.access_token;

  return useQuery<UserInfo>({
    queryKey: ['users', 'me'],
    queryFn: () => fetchUserInfoSafe(accessToken!!),
    enabled: accessToken != null,
    staleTime: Infinity
  });
}

export function useGuildInfoQuery(guild: string) {
  const { status, session } = useSession();

  return useQuery<CustomGuildInfo | null>({
    queryKey: Keys.guild_info(guild),
    queryFn: () => fetchGuildInfo(session!!, guild),
    enabled: status === 'authenticated',
    refetchOnWindowFocus: true,
    retry: false,
    staleTime: 0
  });
}

export function useModuleQuery<K extends keyof CustomModule>(guild: string, module: K) {
  const { status, session } = useSession();

  return useSuspenseQuery({
    queryKey: Keys.modules(guild, module),
    queryFn: () => getModule(session!!, guild, module)
  });
}

export type EnableModuleOptions = { guild: string; module: string; enabled: boolean };
export function useEnableModuleMutation() {
  const { session } = useSession();

  return useMutation({
    mutationFn: async ({ enabled, guild, module }: EnableModuleOptions) => {
      if (enabled) return enableModule(session!!, guild, module);
      return disableModule(session!!, guild, module);
    },
    async onSuccess(_, { guild, module, enabled }) {
      await client.invalidateQueries({queryKey: Keys.modules(guild, module)});
      client.setQueryData<GuildInfo | null>(Keys.guild_info(guild), (prev) => {
        if (prev == null) return null;

        if (enabled) {
          return {
            ...prev,
            disabledModules: prev.disabledModules.includes(module)
              ? prev.disabledModules
              : [...prev.disabledModules, module],
          };
        } else {
          return {
            ...prev,
            disabledModules: prev.disabledModules.filter((f) => f !== module),
          };
        }
      });
    },
  });
}

export type UpdateModuleOptions = {
  guild: string;
  module: keyof CustomModule;
  options: FormData | string;
};
export function useUpdateModuleMutation() {
  const { session } = useSession();

  return useMutation({
    mutationFn: (options: UpdateModuleOptions) =>
      updateModule(session!!, options.guild, options.module, options.options),
    onSuccess(updated, options) {
      const key = Keys.modules(options.guild, options.module);

      return client.setQueryData(key, updated);
    },
  });
}

export function useGuildRolesQuery(guild: string) {
  const { session } = useSession();

  return useQuery({
    queryKey: Keys.guildRoles(guild),
    queryFn: () => fetchGuildRoles(session!!, guild)
  });
}

export function useGuildChannelsQuery(guild: string) {
  const { session } = useSession();

  return useQuery({
    queryKey: Keys.guildChannels(guild),
    queryFn: () => fetchGuildChannels(session!!, guild)
  });
}

export function useSelfUser(): UserInfo {
  return useSelfUserQuery().data!!;
}

export function useGuildPreview(guild: string) {
  const query = useGuilds();

  return {
    guild: query.data?.find((g) => g.id === guild),
    query,
  };
}
