import { Icon } from '@chakra-ui/react';
import { ModulesConfig } from './types';
import { features } from '@/config/translations/features';
import { LuWebhook, LuTicket } from "react-icons/lu";
import { FaShieldAlt, FaMicrophone, FaGamepad } from "react-icons/fa";
import { RiAlarmWarningLine, RiTeamLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { TbMessageReport } from "react-icons/tb";
import { useReportModule } from './modules/ReportModule';

/**
 * Define information for each features
 */
export const modules: ModulesConfig = {
  webhook: {
    name: <features.T text="webhook" />,
    description: <features.T text="webhook description" />,
    icon: <Icon as={LuWebhook} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  moderation: {
    name: <features.T text="moderation" />,
    description: <features.T text="moderation description" />,
    icon: <Icon as={FaShieldAlt} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  strikes: {
    name: <features.T text="strikes" />,
    description: <features.T text="strikes description" />,
    icon: <Icon as={RiAlarmWarningLine} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  verification: {
    name: <features.T text="verification" />,
    description: <features.T text="verification description" />,
    icon: <Icon as={GoVerified} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  ticketing: {
    name: <features.T text="ticketing" />,
    description: <features.T text="ticketing description" />,
    icon: <Icon as={LuTicket} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  voice: {
    name: <features.T text="voice" />,
    description: <features.T text="voice description" />,
    icon: <Icon as={FaMicrophone} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  report: {
    name: <features.T text="report" />,
    description: <features.T text="report description" />,
    icon: <Icon as={TbMessageReport} />,
    useRender: useReportModule,
  },
  roles: {
    name: <features.T text="roles" />,
    description: <features.T text="roles description" />,
    icon: <Icon as={RiTeamLine} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
  games: {
    name: <features.T text="games" />,
    description: <features.T text="games description" />,
    icon: <Icon as={FaGamepad} />,
    useRender() {
      return {
        component: <></>,
        onSubmit: () => {},
      };
    },
  },
};
