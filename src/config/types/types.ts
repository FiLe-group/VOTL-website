import { CustomModule } from './custom-types';
import { Guild } from '@/api/discord';
import { ReactElement, ReactNode } from 'react';

export type AppConfig = {
  /**
   * bot name
   */
  name: string;
  /**
   * Image Url
   */
  icon: string;
  /**
   * Guild settings
   */
  guild: GuildConfig;
  /**
   * Url to invite the bot
   *
   * example: `https://discord.com/api/oauth2/authorize?client_id=907955781972918281&permissions=8&scope=bot`
   */
  inviteUrl: string;
};

export type GuildConfig = {
  /**
   * Filter configurable guilds
   *
   * ex: to allow only if user permissions include ADMINISTRATOR
   * ```
   * import { PermissionFlags } from '@/api/discord';
   * (Number(guild.permissions) & PermissionFlags.ADMINISTRATOR) !== 0
   * ```
   */
  filter: (guild: Guild) => boolean;
};

export interface GuildInfo {
  disabledModules: string[];
  bannerUrl?: string;
}

export type ModulesConfig = {
  [K in keyof CustomModule]: ModuleConfig<K>;
};

/**
 * Internal Module info
 */
export interface ModuleConfig<K extends keyof CustomModule> {
  name: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  /**
   * Render content in Module view
   */
  useRender: UseFormRender<CustomModule[K]>;
  /**
   * Render skeleton before featrue is loaded
   */
  useSkeleton?: () => ReactNode;
}

type SubmitFn<T> = (data: FormData | string) => Promise<T>;

export type UseFormRenderResult = {
  /**
   * Save bar will be disappeared if `canSave` is false
   */
  canSave?: boolean;

  /**
   * called on submit
   */
  onSubmit: () => void;

  /**
   * Reset current value
   */
  reset?: () => void;

  component: ReactElement;
};

export type UseFormRender<T = unknown> = (data: T, onSubmit: SubmitFn<T>) => UseFormRenderResult;
