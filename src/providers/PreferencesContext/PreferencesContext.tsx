import { createContext, ReactElement, useContext, useState } from 'react';

import { DEFAULT_LOCALE, DEFAULT_THEME } from '@/constants';

import {
  Preferences,
  PreferencesContextType,
  PreferencesProviderProps,
} from './PreferencesContext.types';

const defaultPreferences: Preferences = {
  locale: DEFAULT_LOCALE,
  theme: DEFAULT_THEME,
};

const PreferencesContext = createContext<PreferencesContextType>({
  ...defaultPreferences,
  updatePreferences: () => {},
});

export function PreferencesProvider({
  children,
  initialPreferences,
}: PreferencesProviderProps): ReactElement {
  const [preferences, setPreferences] = useState<Preferences>(
    initialPreferences ?? defaultPreferences
  );

  const updatePreferences = (newPreferences: Partial<Preferences>): void => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      ...newPreferences,
    }));
  };

  return (
    <PreferencesContext.Provider value={{ ...preferences, updatePreferences }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesContextType {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferences must be used within a PreferencesProvider');
  }
  return context;
}
