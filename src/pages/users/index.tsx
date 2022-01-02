import {
    Box,
    Flex,
    Heading,
    Icon,
    Button,
    Table,
    Thead,
    Tr,
    Th,
    Checkbox,
    Tbody,
    Td,
    Text,
    Spinner,
    useBreakpointValue,
    Link
} from '@chakra-ui/react';

import { RiPencilLine, RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

import Head from 'next/head';
import NextLink from 'next/Link';
import { useQuery } from 'react-query';
import { api } from '../../services/api';
import { useUsers } from '../../services/hooks/useUsers';
import { useState } from 'react';
import { queryClient } from '../../services/queryClient';


export default function UserList() {

    const [activePage,setActivePage] = useState(1);
    const { data, isLoading, isFetching, error } = useUsers(activePage);


    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    async function prefetchUserDetails(user_id:string){
        await queryClient.prefetchQuery(['user',user_id], async ()=>{
            const response = await api.get(`users/${user_id}`);

            return response.data;
        }, {
            staleTime: 1000 * 60 * 10
        });
    }

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários
                            {!isLoading && isFetching && <Spinner size='sm' color='gray' ml='4' />}
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                cursor="pointer"
                                leftIcon={<Icon as={RiAddLine} />}>
                                Adicionar usuário
                            </Button>
                        </NextLink>

                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao carregar os usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" w="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th></Th>
                                    </Tr>
                                </Thead>

                                <Tbody>

                                    {data.users.map(user => {
                                        return <Tr key={user.id}>
                                            <Td px={["4", "4", "6"]}>
                                                <Checkbox colorScheme="pink" />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Link color="purple.400" onMouseEnter={()=> prefetchUserDetails(user.id)}>{user.name} </Link>
                                                    <Text fontSize="small" color="gray.300">{user.email}</Text>
                                                </Box>
                                            </Td>

                                            {isWideVersion && <Td>
                                                {user.createdAt}
                                            </Td>}
                                            <Td>
                                                {isWideVersion &&
                                                    <Button
                                                        as="a"
                                                        size="sm"
                                                        fontSize="sm"
                                                        colorScheme="purple"
                                                        cursor="pointer"
                                                        leftIcon={<Icon as={RiPencilLine} />}>
                                                        Editar
                                                    </Button>}
                                            </Td>
                                        </Tr>
                                    })}
                                </Tbody>
                            </Table >


                            <Pagination totalItens={data.totalCount} activePage={activePage} onPageChange={setActivePage}  />

                        </>
                    )}
                </Box >
            </Flex >

            <Head>
                <title>Dashgo | Usuários</title>
            </Head>
        </Box >
    )
}