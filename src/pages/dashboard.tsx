import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar/Index";

import Chart from 'react-apexcharts';

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p='8'
                        bg="gray.800"
                        borderRadius={8}
                    >

                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>
                        
                    </Box>

                    <Box
                        p='8'
                        bg="gray.800"
                        borderRadius={8}
                    >

                        <Text fontSize="lg" mb="4">
                            Inscritos do ano
                        </Text>
                    </Box>

                </SimpleGrid>

                
            </Flex>

            <Head>
                <title>Dashgo | Dashboard</title>
            </Head>
        </Flex>
    )
}