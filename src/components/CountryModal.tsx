import { Modal, LoadingOverlay, Text } from '@mantine/core';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../queries/Country';

export default function CountryModal({opened, close, country}: {opened: boolean, close: () => void, country: string}) {

    const { data, loading, error } = useQuery(GET_COUNTRY,{
        variables: {
            code: country,
        },
    });

    if(loading) return (
        <>
            <Modal opened={opened} pos={'relative'} onClose={close} title='' centered>
                <LoadingOverlay visible overlayBlur={2} />
            </Modal>
        </>
    )

    if(error) return <p>Error...</p>

    if( data.country == null ){
        return(
            <>
            </>
        )
    }
    
    return (
        <>
            <Modal opened={opened} onClose={close} title={data.country.name} centered>
                <Text>Capital : {data.country.capital}</Text>
                <Text>Currency : {data.country.currency}</Text>
            </Modal>
        </>
    );
}