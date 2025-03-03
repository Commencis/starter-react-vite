export type Theme = 'light' | 'dark';

type Color<T extends string | number> = Record<T, string>;
type BaseColorStep = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorPalette = {
  primary: Color<BaseColorStep>;
  success: Color<BaseColorStep>;
  warning: Color<BaseColorStep>;
  error: Color<BaseColorStep>;
  information: Color<BaseColorStep>;
  neutral: Color<BaseColorStep | 'white' | 'black'>;
};
