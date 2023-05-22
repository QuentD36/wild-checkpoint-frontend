import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql`
  query continents {
    continents {
      code
      name
    }
  }
`

export const GET_CONTINENT_COUNTRIES = gql`
  query GetContinentCountries($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`