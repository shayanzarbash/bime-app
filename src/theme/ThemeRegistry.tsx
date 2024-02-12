'use client';

import theme from '@/theme';
import * as React from 'react';
import { prefixer, } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { Experimental_CssVarsProvider as CssVarsProvider, } from '@mui/material/styles';

export default function ThemeRegistry({ children, }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider 
      options={{
        key: 'muirtl', 
        stylisPlugins: [prefixer, rtlPlugin, ], 
        prepend: true,
      }}
    >
      <CssVarsProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </CssVarsProvider>
    </NextAppDirEmotionCacheProvider>
  );
}