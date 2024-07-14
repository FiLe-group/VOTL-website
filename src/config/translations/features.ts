import { provider } from './provider';
import { createI18n } from '@/utils/i18n';

export const feature = createI18n(provider, {
  en: {
		music: 'Music Player',
		'music description': 'Play music in Your Discord Server',
		welcome: 'Welcome Message',
		'welcome description': 'Send message when user joined the server',
		gaming: 'Gaming',
		'gaming description': 'Enjoy playing games with your friends',
		'reaction role': 'Reaction Role',
		'reaction role description': 'Give user a role when clicking on a button',
		memes: 'Memes Time',
		'memes description': 'Send memes everyday',
	},
});
