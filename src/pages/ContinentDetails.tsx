import { useQuery } from "@apollo/client";
import { GET_CONTINENT_COUNTRIES } from "../queries/Continent";
import { Button, Container, Group, LoadingOverlay, Title } from "@mantine/core";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDebouncedState, useDisclosure } from "@mantine/hooks";
import CountryModal from "../components/CountryModal";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";

export default function ContinentDetails() {
    const code = useParams().code;
    const [country, setCountry] = useState('');
    const [opened, { open, close }] = useDisclosure(false);
    const [searchValue, setSearchValue] = useDebouncedState('', 200);


    const { data, loading, error } = useQuery(GET_CONTINENT_COUNTRIES,{
        variables: {
            code: code,
        },
    });


    if(loading) return (
        <LoadingOverlay visible overlayBlur={2} />
    );

    if(error) return <p>Error...</p>;

    const filteredCountries = data.continent.countries.filter((country: { name: string; }) => country.name.toLowerCase().includes(searchValue.toLowerCase()));


    return (
        <>

            <Container>
                <Title sx={{textAlign: 'center'}}>Détails {data.continent.name}</Title>

                <Group sx={{justifyContent:'space-between'}}>
                    <Link to={'/'}>
                        <Button variant="default" sx={{marginTop: '2rem', marginBottom: '2rem'}}>Retour</Button>
                    </Link>
                    <Search placeholder="Search..." data={data.continent.countries} onSearchChange={setSearchValue}/>
                </Group>
                
                <Layout title="Countries" data={filteredCountries} setCountry={setCountry} open={open} />
                <CountryModal opened={opened} close={close} country={country}/>
            </Container>
            
        </>
        
    );
}