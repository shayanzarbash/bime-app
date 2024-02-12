import '@styles/css/general-css-style.css';
import '@styles/scss/general-scss-style.scss';
import ThemeRegistry from '@/theme/ThemeRegistry'
import { NextIntlClientProvider, useLocale } from 'next-intl'
import { DEFAULT_LOCALE } from '@/modules/general/libraries/general-constants';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = useLocale();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
  }


  return (
    <html lang="fa">
      <body dir={locale === DEFAULT_LOCALE ? 'rtl' : 'ltr'}>
        <ThemeRegistry>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            {children}
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  )
}
