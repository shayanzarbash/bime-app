import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  locales: ['fa'],
  defaultLocale: 'fa',
});

export const config = { matcher: ['/((?!api|fonts|styles|static|images|_next|_vercel|favicon.ico|robots.txt).*)',], };
