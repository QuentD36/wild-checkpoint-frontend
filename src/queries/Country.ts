import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
    query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      phone
      continent {
        code
        name
      }
      capital
      currency
      languages {
        code
        name
        native
        rtl
      }
      emoji
      emojiU
      states {
        code
        name
      }
    }
  }
`
