import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const features = createI18n(provider, {
  en: {
		webhook: 'Webhook',
		'webhook description': 'description',
		moderation: 'Moderation',
		'moderation description': 'description',
		strikes: 'Strikes',
		'strikes description': 'description',
		verification: 'Verification',
		'verification description': 'description',
		ticketing: 'Ticketing',
		'ticketing description': 'description',
		voice: 'Custom VC',
		'voice description': 'description',
		report: 'Reporting',
		'report description': 'description',
		roles: 'Roles',
		'roles description': 'description',
		games: 'Games',
		'games description': 'description',
	},
});
