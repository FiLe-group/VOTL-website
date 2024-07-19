import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const guild = createI18n(provider, {
  en: {
    modules: 'Modules',
    banner: {
      title: 'Getting Started',
      description: 'Create your bot and type something',
    },
    error: {
      'not found': 'Where is it?',
      'not found description': "The bot can't access the server, let's invite him!",
      load: 'Failed to load guild',
    },
    bn: {
      'enable module': 'Enable',
      'config module': 'Config',
      invite: 'Invite bot',
      settings: 'Settings',
    },
  },
});
