import { gql } from "@apollo/client";
import { USE_CURRENT_ACCOUNT_FRAGMENT } from "./fragments";

export const GET_CURRENT_ACCOUNT_QUERY = gql`
  query GetCurrentAccount($token: String) {
    currentAccount(id: $token) {
      ...UseCurrentAccountAccount
    }
  }
  ${USE_CURRENT_ACCOUNT_FRAGMENT}
`;
