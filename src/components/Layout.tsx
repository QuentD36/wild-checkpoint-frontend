import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    rem,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 700,
    },
  
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: theme.radius.md,
      height: rem(90),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      transition: 'box-shadow 150ms ease, transform 100ms ease',
  
      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'scale(1.05)',
      },
    },
  }));
  
  export default function Layout({ title, data, setCountry, open}: { title: string, data: any[], setCountry?: (country: any) => void, open?: () => void }) {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    const handleClick = (e : any) => {
      if( title === 'Continents' ){
        var to = '/continents/' + e.currentTarget.getAttribute('data-id')
        navigate( to )
      }else{
        if (setCountry && open) {
          open()
          setCountry(e.currentTarget.getAttribute('data-id'))
        }

      }
    }
  
    const items = data.map((item) => (
      <UnstyledButton key={item.code} className={classes.item} onClick={handleClick} data-id={item.code}>
        {item.emoji && (
          item.emoji
        )}
        <Text size="xs" mt={7}>
          {item.name}
        </Text>
      </UnstyledButton>
    ));
  
    return (
      <Card withBorder radius="md" className={classes.card} sx={{marginTop: '2rem'}}>
        <Group position="apart">
          <Text className={classes.title}>{title}</Text>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    );
  }