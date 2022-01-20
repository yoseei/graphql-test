import { useQuery } from "@apollo/client";
import { GET_CURRENT_ACCOUNT_QUERY } from "commons/hooks/useCurrentAccount/graphql/queries";

export function useCurrentAccount(token: string | null) {
  const { data } = useQuery(GET_CURRENT_ACCOUNT_QUERY, {
    variables: { id: token },
  });
  console.log(data);
}
