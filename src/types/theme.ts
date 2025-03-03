export type Theme = 'light' | 'dark';

type Color<T extends string | number> = Record<T, string>;
type ColorTint = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorPalette = {
  primary: Color<ColorTint>;
  success: Color<ColorTint>;
  warning: Color<ColorTint>;
  error: Color<ColorTint>;
  information: Color<ColorTint>;
  neutral: Color<ColorTint | 'white' | 'black'>;
};
