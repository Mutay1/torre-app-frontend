import "twin.macro";
import * as React from "react";
/** @jsxImportSource @emotion/react */

import Logo from "../components/Logo/logo"
import Flex from "../components/utils/flex";
import Button from "../components/Button/button";
import Layout from "../components/Layout/layout";
import { MainSubtitle, MainTitle, SearchInput } from "../components/Home/home";

import useRouter from "../hooks/router"

export default function HomePage() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = React.useState("");
    const redirect = async (route) => await router.history(`${route}/${searchTerm}`);
  
    const onSearchPeople = async () => {
      if (isInvalid()) return;
      await redirect(`/bio`);
    };
  
    const isInvalid = () => searchTerm.length === 0 || searchTerm.split(" ").join("").length === 0;
  
    return (
      <Layout>
        <Flex
          center
          tw="flex-col w-full bg-gray-800 py-6 md:py-8 bg-cover bg-center min-h-screen"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1617734713/origin/explorer/ftswyh7z7twblwhruyku.jpg')",
          }}
        >
          <div tw="max-w-4xl text-center">
            <Logo tw="mx-auto w-36 md:w-60 mt-4"  />
  
            <MainTitle>Torre</MainTitle>
            <MainSubtitle>Your matching network for work</MainSubtitle>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (isInvalid()) return;
  
                await onSearchPeople();
              }}
            >
              <SearchInput
                type="text"
                placeholder="Enter Username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Flex centerH tw="gap-2">
                <Button as="button" type="button" click={onSearchPeople} secondary>
                  Search User
                </Button>
              </Flex>
            </form>
          </div>
        </Flex>
      </Layout>
    );
  }