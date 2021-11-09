import { Flex, Box, Heading, Text, Image, Stack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Head from "next/head";


export default function NotFound() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Stack direction="column" spacing="4" align="center">
                        <Heading size="4xl" fontWeight="bold">404</Heading>
                        <Heading size="2xl" fontWeight="normal">Oops</Heading>
                        <Text size="lg" fontWeight="normal">Esta página não existe</Text>
                        <Image src="https://c.tenor.com/yheo1GGu3FwAAAAM/rick-roll-rick-ashley.gif" width="64" alt="Rickrollado" />
                    </Stack>

                </Box>
            </Flex>

            <Head>
                <title>Dashgo | 404 - Rickroll</title>
            </Head>

        </Box>
    )
}