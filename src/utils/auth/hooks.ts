import { useMutation, useQuery } from '@tanstack/react-query';
import { client, Keys } from '@/api/hooks';
import { AccessToken } from './server';
import { callReturn, callDefault } from '@/utils/fetch/core';
import Router from 'next/router';

/**
 * Get discord oauth2 access token if logged in, otherwise return null
 */
async function auth() {
  return await callReturn<AccessToken>('/api/auth', {
    request: {
      method: 'GET',
    },
  });
}

export async function logout() {
  await callDefault(`/api/auth/signout`, {
    request: {
      method: 'POST',
    },
  });

  await client.invalidateQueries({queryKey: Keys.login});
  Router.reload()
}

type SessionResult =
  | {
      status: 'authenticated';
      session: AccessToken;
    }
  | {
      status: 'loading' | 'unauthenticated';
      session: null;
    };

type SessionResultTemp =
  | {
      status: 'authenticated';
      session: AccessToken;
    }
  | {
      status: 'loading';
      session: null;
    }
  | {
      status: 'unauthenticated';
      session: number;
    };

export function useSession(): SessionResult {
  const { isError, isLoading, data } = useQuery({
    queryKey: Keys.login,
    queryFn: () => auth(),
    staleTime: 5*1000,
    gcTime: 5*1000
  });

  if (isError)
    return {
      status: 'unauthenticated',
      session: null,
    };

  if (isLoading)
    return {
      status: 'loading',
      session: null,
    };

  return {
    status: 'authenticated',
    session: data!,
  };
}

export function useSessionTemp(): SessionResultTemp {
  const { isError, isLoading, data } = useQuery({
    queryKey: Keys.login,
    queryFn: () => auth()
  });

  if (isError)
    return {
      status: 'unauthenticated',
      session: 0,
    };

  if (isLoading)
    return {
      status: 'loading',
      session: null,
    };

  return {
    status: 'authenticated',
    session: data!,
  };
}

export function useSessionQuery() {
  return useQuery({
    queryKey: Keys.login,
    queryFn: () => auth()
  });
}

export function useAccessToken() {
  const { session } = useSession();

  return session?.access_token;
}

export function useLogoutMutation() {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: () => logout(),
    onSuccess: async () => {
      await client.invalidateQueries({queryKey: Keys.login});
      Router.reload();
    }
  });
}
