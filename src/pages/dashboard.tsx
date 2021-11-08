import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const series = [
    { name: "serie1", data: [10, 20, 10, 15, 20, 30, 40] }
];

const options = {
    chart: {
        toolbar: {
            show: false
        },

        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },

    grid: {
        show: false
    },

    dataLabels: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },

        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-11-02T00:00:00:00.000Z',
            '2021-11-03T00:00:00:00.000Z',
            '2021-11-04T00:00:00:00.000Z',
            '2021-11-05T00:00:00:00.000Z',
            '2021-11-06T00:00:00:00.000Z',
            '2021-11-07T00:00:00:00.000Z',
            '2021-11-08T00:00:00:00.000Z'
        ],
    },

    fill:{
        opacity:0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom:0.7,
            opacityTo:0.3
        }
    }
}

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
                        pb="4"
                    >

                        <Text fontSize="lg" mb="4">
                            Inscritos da semana
                        </Text>

                        <Chart series={series} type="area" options={options} />

                    </Box>

                    <Box
                        p='8'
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >

                        <Text fontSize="lg" mb="4">
                            Inscritos do ano
                        </Text>

                        <Chart series={series} type="bar" options={options} />
                    </Box>

                </SimpleGrid>


            </Flex>

            <Head>
                <title>Dashgo | Dashboard</title>
            </Head>
        </Flex>
    )
}