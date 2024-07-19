import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const modulest = createI18n(provider, {
  en: {
		webhook: 'title',
		'webhook description': 'description',
		moderation: 'title',
		'moderation description': 'description',
		strikes: 'title',
		'strikes description': 'description',
		verification: 'title',
		'verification description': 'description',
		ticketing: 'title',
		'ticketing description': 'description',
		voice: 'title',
		'voice description': 'description',
		report: 'title',
		'report description': 'description',
		roles: 'title',
		'roles description': 'description',
		games: 'title',
		'games description': 'description',
	},
});
