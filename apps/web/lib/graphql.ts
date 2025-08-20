import { initGraphQLTada, TadaDocumentNode } from "gql.tada";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import type { introspection } from "./graphql-env.d.ts";
import { print } from "graphql";

export const graphql = initGraphQLTada<{
  introspection: introspection;
  scalars: {
    DateTime: string;
    JSON: BlocksContent;
  };
}>();

export async function query<TData, TVariables>(
  query: TadaDocumentNode<TData, TVariables>,
  variables?: TVariables
): Promise<TData> {
  const queryString = typeof query === "string" ? query : print(query);

  const res = await fetch(process.env.STRAPI_GRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ query: queryString, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors));
  }

  return json.data;
}

export type { FragmentOf, ResultOf, VariablesOf } from "gql.tada";
export { readFragment } from "gql.tada";
