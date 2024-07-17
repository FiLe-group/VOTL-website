import { UseQueryResult } from '@tanstack/react-query';
import { ReactNode } from 'react';
import Header from '../layout/navbar/main';

export function QueryStatus({
  query,
  loading,
  usermenu,
  children,
}: {
  query: UseQueryResult;
  /**
   * element to display when loading
   */
  loading: ReactNode;
  usermenu: ReactNode;
  children: ReactNode;
}) {
  if (query.isError) return <>
      <Header />
      {children}
    </>;
  if (query.isLoading || query.isPending) return <>{loading}</>;
  if (query.isSuccess) return <>
      <Header>
        {usermenu}
      </Header>
      {children}
    </>;

  return <></>;
}
