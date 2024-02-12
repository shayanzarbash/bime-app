/* eslint-disable max-len */
import { CSSInterpolation, } from '@mui/material/styles';

export const buttonBaseRoot = {
  display: 'flex !important',
  gap: 'var(--spacing-xx-small)',
  'svg': {
    width: 20,
    height: 20,
    minWidth: 20,
  },
};

export const buttonRoot = {
  height: 40,
  boxShadow: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--spacing-base) var(--spacing-x-large)',
  borderRadius: 'var(--border-radius-small)',
};

export const buttonContainedPrimary = {
  backgroundImage: 'linear-gradient(to right, var(--primary-main),var(--brand-400), var(--primary-main), var(--primary-main))',
  backgroundSize: '300% 100%',
  transition: 'all .4s ease-in-out',
  '&:hover': {
    backgroundPosition: '-100% 0 ',
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    border: '1px solid var(--gray-200)',
    backgroundImage: 'none',
    color: 'var(--action-disabled)',
    backgroundColor: 'var(--gray-50)',
  },
  'svg': {
    fill: 'var(--white)',
    marginRight: 'var(--spacing-x-small)',
    'path': { fill: 'var(--white)', },
  },
};

export const buttonContainedSecondary = {
  backgroundImage: 'linear-gradient(to right, var(--secondary-main),var(--purple-400), var(--secondary-main), var(--secondary-main))',
  backgroundSize: '300% 100%',
  transition: 'all .4s ease-in-out',
  '&:hover': {
    backgroundPosition: '-100% 0',
    boxShadow: 'none',
  },
  '&.Mui-disabled': {
    border: '1px solid var(--gray-200)',
    backgroundImage: 'none',
    color: 'var(--action-disabled)',
    backgroundColor: 'var(--gray-50)',
  },
  'svg': {
    fill: 'var(--white)',
    marginRight: 'var(--spacing-x-small)',
    'path': { fill: 'var(--white)', },
  },
};

export const buttonOutlinedPrimary = {
  border: '1px solid var(--primary-main)',
  overflow: 'hidden',
  display: 'inline-block',
  '&:after': {
    content: "''",
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--brand-10)',
    borderRadius: 'var(--border-radius-xx-large)',
    mixBlendMode: 'lighten',
    transition: 'all 0.2s ease',
    transformOrigin: 'center',
    transform: 'scale(0)',
    zIndex: '-1',
  },
  '&:hover:after': { transform: 'scale(1)', },
  '&.Mui-disabled': {
    border: '1px solid var(--gray-200)',
    backgroundImage: 'none',
    color: 'var(--action-disabled)',
    backgroundColor: 'var(--action-disabled-background)',
  },
  'svg': {
    fill: 'var(--primary-main)',
    marginRight: 'var(--spacing-x-small)',
    'path': { fill: 'var(--primary-main)', },
  },
};

export const buttonOutlinedSecondary = {
  border: '1px solid var(--gray-10)',
  overflow: 'hidden',
  display: 'inline-block',
  color: 'var(--gray-10)',
  '&:after': {
    content: "''",
    position: 'absolute',
    display: 'block',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--purple-10)',
    borderRadius: 'var(--border-radius-xx-small)',
    mixBlendMode: 'lighten',
    transition: 'all 0.2s ease',
    transformOrigin: 'center',
    transform: 'scale(0)',
    zIndex: '-1',
  },
  '&:hover:after': { transform: 'scale(1)', },
  '&.Mui-disabled': {
    border: '1px solid var(--gray-200)',
    backgroundImage: 'none',
    color: 'var(--action-disabled)',
    backgroundColor: 'var(--action-disabled-background)',
  },
  'svg': {
    fill: 'var(--gray-10)',
    marginRight: 'var(--spacing-x-small)',
    'path': { fill: 'var(--secondary-main)', },
  },
};

export const buttonEndIcon = {
  width: 20,
  height: 20,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '0 var(--spacing-small) 0 0',
  'svg': {
    width: 20,
    height: 20,
  },
};

export const buttonStartIcon = {
  width: 20,
  height: 20,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  margin: '0 0 0 var(--spacing-small) ',
  'svg': {
    width: 20,
    height: 20,
  },
};

export const typographyRoot = {};

export const typographyH1 = {
  fontSize: 'var(--font-size-h1)',
  fontWeight: 'var(--font-weight-h1)',
  lineHeight: 'var(--line-height-h1)',
};

export const typographyH2 = {
  fontSize: 'var(--font-size-h2)',
  fontWeight: 'var(--font-weight-h2)',
  lineHeight: 'var(--line-height-h2)',
};

export const typographyH3 = {
  fontSize: 'var(--font-size-h3)',
  fontWeight: 'var(--font-weight-h3)',
  lineHeight: 'var(--line-height-h3)',
};

export const typographyH4 = {
  fontSize: 'var(--font-size-h4)',
  fontWeight: 'var(--font-weight-h4)',
  lineHeight: 'var(--line-height-h4)',
};

export const typographyH5 = {
  fontSize: 'var(--font-size-h5)',
  fontWeight: 'var(--font-weight-h5)',
  lineHeight: 'var(--line-height-h5)',
};

export const typographyH6 = {
  fontSize: 'var(--font-size-h6)',
  fontWeight: 'var(--font-weight-h6)',
  lineHeight: 'var(--line-height-h6)',
};

export const typographyBody1 = {
  fontSize: 'var(--font-size-body1)',
  fontWeight: 'var(--font-weight-body1)',
  lineHeight: 'var(--line-height-body1)',
};

export const typographyBody2 = {
  fontSize: 'var(--font-size-body2)',
  fontWeight: 'var(--font-weight-body2)',
  lineHeight: 'var(--line-height-body2)',
};

export const typographyButton1 = {
  fontSize: 'var(--font-size-button1)',
  fontWeight: 'var(--font-weight-button1)',
  lineHeight: 'var(--line-height-button1)',
};

export const typographyButton2 = {
  fontSize: 'var(--font-size-button2)',
  fontWeight: 'var(--font-weight-button2)',
  lineHeight: 'var(--line-height-button2)',
};

export const typographyTiny = {
  fontSize: 'var(--font-size-tiny)',
  fontWeight: 'var(--font-weight-tiny)',
  lineHeight: 'var(--line-height-tiny)',
};

export const typographyOverline = {
  fontSize: 'var(--font-size-overline)',
  fontWeight: 'var(--font-weight-overline)',
  lineHeight: 'var(--line-height-overline)',
};

export const typographySubtitle1 = {
  fontSize: 'var(--font-size-subtitle1)',
  fontWeight: 'var(--font-weight-subtitle1)',
  lineHeight: 'var(--line-height-subtitle1)',
};

export const typographySubtitle2 = {
  fontSize: 'var(--font-size-subtitle2)',
  fontWeight: 'var(--font-weight-subtitle2)',
  lineHeight: 'var(--line-height-subtitle2)',
};

export const typographyError = {
  color: 'var(--error-main)',
  fontSize: 'var(--font-size-subtitle2)',
  fontWeight: 'var(--font-weight-subtitle2)',
  lineHeight: 'var(--line-height-subtitle2)',
};


export const inputAdornmentStart = {
  margin: '0  0 0 var(--spacing-large)',
  'svg': {
    color: 'var(--gray-600)',
    fill: 'var(--gray-600)',
  },
};

export const inputAdornmentEnd = {
  margin: '0 var(--spacing-large) 0 0 ',
  'svg': {
    color: 'var(--gray-600)',
    fill: 'var(--gray-600)',
  },
};

export const textfeildRoot = {
  fontSize: 'var(--font-size-normal)',
  '& label': { top: '-2px', },
};

export const inputLabelRoot = {
  color: 'var(--gray-700) !important',
  fontSize: 'var(--font-size-normal)',
};

export const outlinedInputRoot = {
  borderRadius: 0,
  border: 'none',
  backgroundColor: 'var(--gray-600)',
  borderBottom: '2px solid var(--gray-400)',
  height: 48,
  fontSize: 'var(--font-size-normal)',
  'fieldset': { border: '1px solid var(--gray-900) !important', },
  '&:hover fieldset': { border: '1px solid var(--gray-900) !important', },
  '&.Mui-focused fieldset': { border: '1px solid var(--gray-800) !important', },
  '&.Mui-error fieldset ': { border: '1px solid var(--error-main) !important', },
};

export const inputBaseRoot: CSSInterpolation = {
  fontSize: 'var(--font-size-normal)',
  fontFamily: 'var(--font-family), var(--font-family-alternate)',
  'svg': {
    color: 'var(--gray-600)',
    fill: 'var(--gray-600)',
  },
};

export const inputBaseMultiline = { height: 'auto !important', };

export const nativeSelectOutlined = {
  'option': {
    cursor: 'pointer',
    padding: 'var(--spacing-large)',
  },
};

export const paperRoot = {
  borderRadius: 'var(--border-radius-normal)',
  boxShadow: 'var(--shadow)',
};

export const menuItemRoot = {
  cursor: 'pointer',
  fontSize: 'var(--font-size-normal)',
  '&.Mui-selected': { backgroundColor: 'var(--gray-100) !important', },
  ':hover': { backgroundColor: 'var(--gray-50)', },
};

export const checkboxRoot = {
  paddingLeft: 0,
  paddingRight: 0,
  'svg': {
    width: 20,
    height: 20,
    fill: 'var(--gray-400)',
    color: 'var(--gray-400)',
  },
  'svg[data-testid="CheckBoxIcon"]': {
    color: 'var(--primary-main)',
    fill: 'var(--primary-main)',
  },
  '& .MuiTouchRipple-child': { backgroundColor: 'var(--gray-600) !important', },
};


export const formHelperTextRoot = {
  color: 'var(--gray-500)',
  fontSize: 'var(--font-size-tiny)',
  fontWeight: 'var(--font-weight-tiny)',
  lineHeight: 'var(--line-height-tiny)',
  marginLeft: 0,
  marginRight: 0,
  '& span': {
    fontSize: 'var(--font-size-tiny)',
    fontWeight: 'var(--font-weight-tiny)',
    lineHeight: 'var(--line-height-tiny)',
  },
};

export const switchRoot = {
  width: 42,
  height: 24,
  padding: 0,
  borderRadius: 'var(--border-radius-x-large)',
  '& .MuiSwitch-switchBase': {
    margin: 3,
    padding: 0,
    transform: 'translateX(1px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(17px)',
      '& .MuiSwitch-thumb:before': { backgroundImage: 'url("/images/icon/night.svg")', },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: 'var(--primary-main)',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'var(--white)',
    transition: 'right 150ms cubic-bezier(2, 0, 0.2, 3) 0ms,transform 150ms cubic-bezier(2, 0, 0.2, 3) 0ms',
    width: 18,
    height: 18,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: 'url("/images/icon/day.svg")',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: 'var(--primary-main)',
    borderRadius: 20 / 2,
  },
};

export const tableCellHead = {
  height: 40,
  borderBottom: '1px solid var(--gray-200)',
  fontSize: 'var(--font-size-body2)',
  fontWeight: 'var(--font-weight-body2)',
  padding: 'var(--spacing-base)',
  '&:last-child': { paddingRight: 'var(--spacing-xx-large)', },
  '&:first-child': { paddingLeft: 'var(--spacing-xx-large)', },
};

export const skeletonRoot = { backgroundColor: 'var(--gray-100)', };

export const tableCellBody = {
  height: 50,
  border: 'none',
  padding: 'var(--spacing-large)',
  '&:last-child': { paddingRight: 'var(--spacing-xx-large)', },
  '&:first-child': { paddingLeft: 'var(--spacing-xx-large)', },
};

export const breadcrumbsSeparator = {
  margin: 0,
  'svg': {
    fill: 'var(--gray-400)',
    maxWidth: 20,
  },
};


export const radioRoot: CSSInterpolation = { fontSize: 'var(--font-size-normal)', };

export const autocompleteEndAdornment: CSSInterpolation = { display: 'flex', };

export const autocompletePopupIndicator: CSSInterpolation = {
  transition: 'all 400ms ease-in-out',
  '& svg': {
    marginTop: 2,
    '& path': { d: "path('M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z')", },
  },
};

export const autocompleteClearIndicator: CSSInterpolation = {
  transition: 'all 400ms ease-in-out',
  '& svg': {
    marginTop: 2,
    width: 16,
    height: 16,
    '& path': { d: "path('M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z')", },
  },
};

export const autocompleteInput: CSSInterpolation = {
  paddingTop: '4.5px !important',
  color: 'var(--gray-700)',
};

export const autocompleteOption: CSSInterpolation = {
  fontSize: 'var(--font-size-body1)',
  '&:hover': { backgroundColor: 'var(--gray-50) !important', },
  '&:selected': { backgroundColor: 'var(--gray-100) !important', },
  '&:focused': { backgroundColor: 'var(--gray-50) !important', },
  '&[data-focus="true"]': { backgroundColor: 'var(--gray-50) !important', },
  '&[aria-selected="true"]': { backgroundColor: 'var(--gray-100) !important', },
  '&[aria-selected="true"].Mui-focused': { backgroundColor: 'var(--gray-100) !important', },
  '&.Mui-selected': { backgroundColor: 'var(--gray-100) !important', },
};

export const autocompleteListbox: CSSInterpolation = { '& .MuiAutocomplete-option.Mui-focused': { backgroundColor: 'var(--gray-50) !important', }, };

