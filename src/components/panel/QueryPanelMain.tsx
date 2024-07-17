import { UseQueryResult } from '@tanstack/react-query';
import { ReactNode } from 'react';
import Header from '../layout/navbar/main';
import { UserMenu } from '../menu/UserMenuMain';

export function QueryStatus({
  query,
  loading,
  children,
}: {
  query: UseQueryResult;
  /**
   * element to display when loading
   */
  loading: ReactNode;
  children: ReactNode;
}) {
  if (query.isError) return <>
      <Header />
      {children}
    </>;
  if (query.isLoading || query.isPending) return <>{loading}</>;
  if (query.isSuccess) return <>
      <Header>
        <UserMenu color="TextPrimary" shadow="normal" bg="CardBackground" />
      </Header>
      {children}
    </>;

  return <></>;
}
