import { MantineProvider } from '@mantine/core';
import { ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage  } from '@mantine/hooks';
import Router from './components/Router';

export default function App() {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['Ctrl+L', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router/>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}


