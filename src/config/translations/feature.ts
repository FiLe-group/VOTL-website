import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const feature = createI18n(provider, {
  en: {
    unsaved: 'Save Changes',
    error: {
      'not enabled': 'Not Enabled',
      'not enabled description': 'Try enable this module?',
      'not found': 'Not Found',
      'not found description': "Hmm... Weird we can't find it",
    },
    bn: {
      enable: 'Enable module',
      disable: 'Disable',
      save: 'Save',
      discard: 'Discard',
    },
  },
});
