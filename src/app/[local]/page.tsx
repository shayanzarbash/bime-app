import { getTranslations } from 'next-intl/server';
import GeneralLayout from '@/modules/layout/components/general-layout';
import { ServerPageProps } from '@/modules/general/libraries/general-types';
import { DEFAULT_LOCALE } from '@/modules/general/libraries/general-constants';

export async function generateMetadata({ params, }: ServerPageProps) {
  const t = await getTranslations({
    locale: DEFAULT_LOCALE,
    namespace: 'home',
  });
  return {
    title: `${t('page_title')}`,
    description: t('page_decsription'),
  };
}

export default function Home() {

  return (
    <GeneralLayout>
    </GeneralLayout>
  )
}
