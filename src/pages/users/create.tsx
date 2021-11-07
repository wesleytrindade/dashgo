import { Box, Flex, Heading, Icon, Button, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, Divider, VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar/Index';


export default function UserCreate() {


    return (
        <Box>
            <Head>
                <title>Dashgo | Criação de Usuário</title>
            </Head>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">

                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" label="Nome completo" placeholder="Ex: Fulano da Silva" />
                            <Input name="email" type="email" label="E-mail" placeholder="Ex: email@email.com" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" label="Senha" placeholder="Digite a sua senha" />
                            <Input name="passwordconfirmation" type="password" label="Confirmação da senha" placeholder="Confirme a senha" />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}