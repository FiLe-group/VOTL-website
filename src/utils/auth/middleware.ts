import { NextMiddleware, NextResponse } from 'next/server';
import { middleware_hasServerSession } from './server';

export const withAuth = (authUrl: string, middleware: NextMiddleware): NextMiddleware => {
  return (req, evt) => {
    const logged = middleware_hasServerSession(req);

    if (!logged) {
      const url = req.nextUrl.clone();
      url.pathname = authUrl;

      return NextResponse.redirect(url);
    }

    return middleware(req, evt);
  };
};

export default withAuth('/', () => NextResponse.next());
