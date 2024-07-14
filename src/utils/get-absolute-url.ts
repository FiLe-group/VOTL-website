export function getAbsoluteUrl(): string {
  const defaultUrl = 'http://localhost:3000';

  return process.env.APP_URL != null ? process.env.APP_URL : defaultUrl;
}
