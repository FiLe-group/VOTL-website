import { FeaturesConfig } from './types';
import { feature } from '@/config/translations/features';
/* import { useWelcomeMessageFeature } from './example/WelcomeMessageFeature';
import { useMemeFeature } from './example/MemeFeature'; */

/**
 * Define information for each features
 *
 * There is an example:
 */
export const features: FeaturesConfig = {
  music: {
    name: <feature.T text="music" />,
    description: <feature.T text="music description" />,
    icon: "fa fa-music",
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  'welcome-message': {
    name: <feature.T text="welcome" />,
    description: <feature.T text="welcome description" />,
    icon: "fa fa-message",
    //useRender: useWelcomeMessageFeature,
		useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  gaming: {
    name: <feature.T text="gaming" />,
    description: <feature.T text="gaming description" />,
    icon: "fa fa-gamepad",
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  'reaction-role': {
    name: <feature.T text="reaction role" />,
    description: <feature.T text="reaction role description" />,
    icon: "fa fa-plus",
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  meme: {
    name: <feature.T text="memes" />,
    description: <feature.T text="memes description" />,
    icon: "fa fa-face-laught",
    //useRender: useMemeFeature,
		useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
};
