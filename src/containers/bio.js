import { QueryClient, QueryClientProvider, useQuery } from "react-query";
/** @jsxImportSource @emotion/react */
import "twin.macro";
import {useParams} from "react-router-dom"

import Error from "../components/Error/error";
import Layout from "../components/Layout/layout";
import { useBio } from "../hooks/useBio";
import { Genome } from "../components/Genome/genome";
import { GenomeSkeleton } from "../components/Genome/genomeSkeleton";
import ConditionalWrap from "../components/ConditionalWrap/conditionalWrap";

const queryClient = new QueryClient();

function UserGenome() {
  const {username} = useParams()
  const { data, isLoading, isError, error } = useBio(username)

  return (
      <Layout title={`${data ? data?.person?.name : username}'s professional genome`}>
        <section tw="w-full bg-gray-50 dark:bg-dark-600 grid grid-cols-1 md:grid-cols-3 px-8 py-8 gap-8 dark:bg-gray-900">
          <ConditionalWrap condition={isLoading}>
            <GenomeSkeleton />
          </ConditionalWrap>
          <Error show={isError || data?.message} >
            <p>
              {isError && error.message}
              {data?.message && data.message}
            </p>
          </Error>
          <ConditionalWrap condition={data && data?.data.person && !isError}>
            <Genome data={data?.data} />
          </ConditionalWrap>
        </section>
      </Layout>
  );
}

export default function Wraped(){
  return(<QueryClientProvider client={queryClient} contextSharing={true}>
        <UserGenome/>
    </QueryClientProvider>
  );
}
