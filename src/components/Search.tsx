import { TextInput, ActionIcon, useMantineTheme, Autocomplete } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

export function Search({ placeholder, data, onSearchChange }: {placeholder: string, data: any[], onSearchChange: (value: string) => void}) {
  const theme = useMantineTheme();
  const names = data.map(item => item.name);

  return (
    <Autocomplete
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          {theme.dir === 'ltr' ? (
            <IconArrowRight size="1.1rem" stroke={1.5} />
          ) : (
            <IconArrowLeft size="1.1rem" stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder={placeholder}
      rightSectionWidth={42}
      data={names}
      limit={10}
      onChange={onSearchChange}
    />
  );
}
