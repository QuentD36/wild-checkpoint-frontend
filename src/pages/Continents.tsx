import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../queries/Continent";
import { ContinentInterface } from "../interfaces/continent";
import { Button, Container, LoadingOverlay, Title } from "@mantine/core";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Search } from "../components/Search";
import { useDebouncedState } from '@mantine/hooks';

export default function Continents() {
    const { data, loading, error } = useQuery(GET_ALL_CONTINENTS);
    const [searchValue, setSearchValue] = useDebouncedState('', 200);

    if(loading) return (
        <LoadingOverlay visible overlayBlur={2} />
    );

    if(error) return <p>Error...</p>;

    const filteredContinents = data.continents.filter((continent: { name: string; }) => continent.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <>
            <Container>
                <Title sx={{textAlign: 'center', marginBottom: '2rem'}}>Continents</Title>
                <Search placeholder="Search..." data={data.continents} onSearchChange={setSearchValue}/>
                <Layout title="Continents" data={filteredContinents} />
            </Container>
        </>
    );
}
