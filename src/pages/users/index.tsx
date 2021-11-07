import { Box, Flex, Heading, Icon, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react';
import { RiPencilLine, RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination/Index';
import { Sidebar } from '../../components/Sidebar/Index';


export default function UserList() {


    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button
                            as="a"
                            size="sm"
                            fontSize="sm"
                            colorScheme="pink"
                            cursor="pointer"
                            leftIcon={<Icon as={RiAddLine} />}>
                            Adicionar usuário
                        </Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="pink" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeigth="bold"> Antonio Nunes </Text>
                                        <Text fontSize="small" color="gray.300">antonio.nunes@squidgames.com</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    10/11/2020
                                </Td>
                                <Td>
                                    <Button
                                        as="a"
                                        size="sm"
                                        fontSize="sm"
                                        colorScheme="purple"
                                        cursor="pointer"
                                        leftIcon={<Icon as={RiPencilLine} />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination pages={5} totalItens={100} activePage={1} />
                </Box>
            </Flex>
        </Box>
    )
}