/**
 * Private settings used in exported objects bellow (with and without units)
 * Not to be exported by itself
 */
const privateStyling = {
  defaultAnimationTimeMs: 300,
  maxContentWidthPx: 1000,
  footerHeightRem: 3,
}

export const Sizes = {
  maxContentWidthPx: privateStyling.maxContentWidthPx,
  maxContentWidth: `${privateStyling.maxContentWidthPx}px`,
  footerHeightRem: privateStyling.footerHeightRem,
  footerHeight: `${privateStyling.footerHeightRem}rem`,
}

export const Styles = {
  inherit: 'inherit',
  defaultAnimationTimeMs: privateStyling.defaultAnimationTimeMs,
  defaultAnimationTime: `${privateStyling.defaultAnimationTimeMs}ms`,
}

export const Radiuses = {
  big: '0.625rem', // 10px on base 16
  small: '0.3125rem', // 5px on base 16
  round: '50%',
  smallPx: 5,
  none: '0px',
}

// static app colors
export const Colors = {
  black: {
    main: '#2e3131',
    pure: '#000000',
  },
  white: {
    main: '#fafafa',
    pure: '#ffffff',
  },
  grey: {
    lightest: '#E8E8E8',
    light: '#E0E0E0',
    medium: '#9E9E9E',
    dark: '#616161',
  },
  green: {
    light: '#81c784',
    main: '#8bc34a',
    dark: '#43a047',
  },
  red: {
    light: '#ef9a7a',
    main: '#e57353',
    dark: '#C64828',
  },
  blue: { light: '#3498db' },
  yellow: { dark: '#fbc531' },
  transparent: 'rgba(0,0,0,0);',
}

const privateSpaces = {
  none: 0,
  small: 0.5,
  smallMedium: 0.7,
  medium: 1,
  large: 1.5,
  extraLarge: 3,
}

export const SpacesRem = privateSpaces
export const Spaces = {
  none: `${privateSpaces.none}rem`,
  small: `${privateSpaces.small}rem`,
  smallMedium: `${privateSpaces.smallMedium}rem`,
  medium: `${privateSpaces.medium}rem`,
  large: `${privateSpaces.large}rem`,
  extraLarge: `${privateSpaces.extraLarge}rem`,
}

export const FontWeights = {
  light: 200,
  medium: 400,
  bold: 800,
}

export const getPxInRem = () => 16
