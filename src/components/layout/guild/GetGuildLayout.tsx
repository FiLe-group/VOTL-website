import DashLayout from '../dash';
import { ReactNode } from 'react';
import GuildNavbar from './GuildNavbar';
import { InGuildSidebar } from './GuildSidebar';

export default function getGuildLayout({
  back,
  children,
}: {
  back?: boolean;
  children: ReactNode;
}) {
  return (
    <DashLayout navbar={<GuildNavbar back={back} />} sidebar={back ? <InGuildSidebar /> : undefined}>
      {children}
    </DashLayout>
  );
}
