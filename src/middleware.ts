export { default } from './utils/auth/middleware';

//Pages need to be logged in before visiting
export const config = {
  matcher: ['/dash/guilds/:path*', '/dash/user/:path*'],
};
