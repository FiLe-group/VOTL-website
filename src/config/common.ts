import { PermissionFlags } from '@/api/discord';
import { AppConfig } from './types';

export const config: AppConfig = {
  name: 'VOTL bot',
  icon:
    '/img/logo-small.png',
  inviteUrl:
    'https://discord.com/oauth2/authorize?client_id=397461072342417408&permissions=8&integration_type=0&scope=bot+applications.commands',
  guild: {
    //filter guilds that user has no permissions to manage it
    filter: (guild) => (Number(guild.permissions) & PermissionFlags.ADMINISTRATOR) !== 0,
  },
};
