export type Theme = 'light' | 'dark';

export type ErrorColor = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type InformationColor =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;
export type NeutralColor =
  | 25
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 'white'
  | 'black';

export type PrimaryColor = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type SuccessColor = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type WarningColor = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorValue = {
  [K in keyof ColorPalette]: keyof ColorPalette[K];
}[keyof ColorPalette];

export type Color<T extends string | number> = Record<T, string>;

export type ColorPalette = {
  primary: Color<PrimaryColor>;
  success: Color<SuccessColor>;
  warning: Color<WarningColor>;
  error: Color<ErrorColor>;
  information: Color<InformationColor>;
  neutral: Color<NeutralColor>;
};
