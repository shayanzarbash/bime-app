'use client';

import dynamic from 'next/dynamic';
import { LayoutProps, } from '@modules/layout/libraries/layout-types';

const
  Header = dynamic(() => import('@modules/layout/components/general-layout/header'), {
    ssr: false, loading: () => <div className={'headerLoading'}></div>,
  }),
  Footer = dynamic(() => import('@modules/layout/components/general-layout/footer'), {
    ssr: false, loading: () => <div style={{ height: 290, }}></div>,
  });

export default function GeneralLayout({ children, }: LayoutProps) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
