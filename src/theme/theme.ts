/* eslint-disable max-len */
'use client';

import ColorSchemes from './color-schemes';
import * as variants from './create-theme-variants';
import { experimental_extendTheme as extendTheme, } from '@mui/material/styles';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    button1: true;
    button2: true;
    tiny: true;
    error: true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    tiny: React.CSSProperties;
    error?: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    tiny?: React.CSSProperties;
    error?: React.CSSProperties;
  }
  interface TextfiledVariantsOptions {
    none?: React.CSSProperties;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    square: true;
  }
}

const theme = extendTheme({
  colorSchemes: ColorSchemes,
  cssVarPrefix: '',
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--font-family), var(--font-family-alternate)',
    button: { textTransform: 'none', },
    button1: variants.typographyButton1,
    button2: variants.typographyButton2,
    tiny: variants.typographyTiny,
    error: variants.typographyError,
  },
  components: {
    MuiButtonBase: { styleOverrides: { root: variants.buttonBaseRoot, }, },
    MuiButton: {
      styleOverrides: {
        root: variants.buttonRoot,
        containedPrimary: variants.buttonContainedPrimary,
        containedSecondary: variants.buttonContainedSecondary,
        outlinedPrimary: variants.buttonOutlinedPrimary,
        outlinedSecondary: variants.buttonOutlinedSecondary,
        endIcon: variants.buttonEndIcon,
        startIcon: variants.buttonStartIcon,
      },
      variants: [
        {
          props: { size: 'large', },
          style: {
            paddingLeft: 'var(--spacing-xxx-large)',
            paddingRight: 'var(--spacing-xxx-large)',
          },
        },
        {
          props: { size: 'medium', },
          style: {
            paddingLeft: 'var(--spacing-xx-large)',
            paddingRight: 'var(--spacing-xx-large)',
          },
        },
        {
          props: { size: 'small', },
          style: {
            paddingLeft: 'var(--spacing-x-large)',
            paddingRight: 'var(--spacing-x-large)',
          },
        },
        {
          props: { variant: 'square', },
          style: { borderRadius: 'var(--border-radius-normal)', },
        },

      ],
    },
    MuiTypography: {
      styleOverrides: {
        root: variants.typographyRoot,
        h1: variants.typographyH1,
        h2: variants.typographyH2,
        h3: variants.typographyH3,
        h4: variants.typographyH4,
        h5: variants.typographyH5,
        h6: variants.typographyH6,
        body1: variants.typographyBody1,
        body2: variants.typographyBody2,
        overline: variants.typographyOverline,
        subtitle1: variants.typographySubtitle1,
        subtitle2: variants.typographySubtitle2,
      },
      defaultProps: {
        variantMapping: {
          button1: 'p',
          button2: 'p',
          error: 'p',
        },

      },
      variants: [
        {
          props: { color: 'grayLight', },
          style: { color: 'var(--gray-100)', },
        },
        {
          props: { color: 'grayMain', },
          style: { color: 'var(--gray-400)', },
        },
      ],
    },
    MuiTextField: { styleOverrides: { root: variants.textfeildRoot, }, },
    MuiInputLabel: { styleOverrides: { root: variants.inputLabelRoot, }, },
    MuiOutlinedInput: { styleOverrides: { root: variants.outlinedInputRoot, }, },
    MuiInputAdornment: {
      styleOverrides: {
        root: { margin: 0, },
        positionStart: variants.inputAdornmentStart,
        positionEnd: variants.inputAdornmentEnd,
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        endAdornment: variants.autocompleteEndAdornment,
        popupIndicator: variants.autocompletePopupIndicator,
        clearIndicator: variants.autocompleteClearIndicator,
        input: variants.autocompleteInput,
        option: variants.autocompleteOption,
        listbox: variants.autocompleteListbox,
      },
    },
    MuiRadio: { styleOverrides: { root: variants.radioRoot, }, },
    MuiInputBase: {
      styleOverrides: {
        root: variants.inputBaseRoot,
        multiline: variants.inputBaseMultiline,
      },
    },
    MuiNativeSelect: { styleOverrides: { outlined: variants.nativeSelectOutlined, }, },
    MuiPaper: { styleOverrides: { root: variants.paperRoot, }, },
    MuiList: { styleOverrides: { root: {}, }, },
    MuiMenuItem: { styleOverrides: { root: variants.menuItemRoot, }, },
    MuiCheckbox: { styleOverrides: { root: variants.checkboxRoot, }, },
    MuiSwitch: { styleOverrides: { root: variants.switchRoot, }, },
    MuiFormHelperText: { styleOverrides: { root: variants.formHelperTextRoot, }, },
    MuiTableCell: {
      styleOverrides: {
        head: variants.tableCellHead,
        body: variants.tableCellBody,
      },
    },
    MuiSkeleton: { styleOverrides: { root: variants.skeletonRoot, }, },
    MuiBreadcrumbs: { styleOverrides: { separator: variants.breadcrumbsSeparator, }, },
  },
});

export default theme;    