import { Icon } from '@chakra-ui/react';
import { ModulesConfig } from './types';
import { modulest } from '@/config/translations/modules';
import { LuWebhook, LuTicket } from "react-icons/lu";
import { FaShieldAlt, FaMicrophone, FaGamepad } from "react-icons/fa";
import { RiAlarmWarningLine, RiTeamLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";

/**
 * Define information for each features
 *
 * There is an example:
 */
export const modules: ModulesConfig = {
  webhook: {
    name: <modulest.T text="webhook" />,
    description: <modulest.T text="webhook description" />,
    icon: <Icon as={LuWebhook} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  moderation: {
    name: <modulest.T text="moderation" />,
    description: <modulest.T text="moderation description" />,
    icon: <Icon as={FaShieldAlt} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  strikes: {
    name: <modulest.T text="strikes" />,
    description: <modulest.T text="strikes description" />,
    icon: <Icon as={RiAlarmWarningLine} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  verification: {
    name: <modulest.T text="verification" />,
    description: <modulest.T text="verification description" />,
    icon: <Icon as={GoVerified} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  ticketing: {
    name: <modulest.T text="ticketing" />,
    description: <modulest.T text="ticketing description" />,
    icon: <Icon as={LuTicket} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  voice: {
    name: <modulest.T text="voice" />,
    description: <modulest.T text="voice description" />,
    icon: <Icon as={FaMicrophone} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  report: {
    name: <modulest.T text="report" />,
    description: <modulest.T text="report description" />,
    icon: <Icon as={TbMessageReport} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  roles: {
    name: <modulest.T text="roles" />,
    description: <modulest.T text="roles description" />,
    icon: <Icon as={RiTeamLine} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  games: {
    name: <modulest.T text="games" />,
    description: <modulest.T text="games description" />,
    icon: <Icon as={FaGamepad} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
};
