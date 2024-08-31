/***
 * Custom types that should be configured by developer
 ***/

import { GuildInfo } from './types';

export type CustomGuildInfo = GuildInfo & {};

/**
 * Define module ids and it's option types
 */
export type CustomModule = {
  webhook: {};
  moderation: {};
  strikes: {};
  verification: {};
  ticketing: {};
  voice: {};
  report: ReportModule;
  roles: {};
  games: {};
};

export type ReportModule = {
  channel?: string;
  message?: string;
  temp: boolean;
};

/** example only
export const memeFeatureSchema = z.object({
  channel: z.string().optional(),
  source: z.enum(['youtube', 'twitter', 'discord']).optional(),
});

export type MemeFeature = z.infer<typeof memeFeatureSchema>; */
