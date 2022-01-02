import { Box, Flex, Heading, Button, Divider, VStack, SimpleGrid, HStack } from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import Link from 'next/link';

import { useMutation } from 'react-query';

import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';
import { useRouter } from 'next/router';

interface UserCreateFormData {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    passwordConfirmation: yup.string().required()
});



export default function UserCreate() {

    const router = useRouter();
    const createUser = useMutation(async (user: UserCreateFormData) => {
        const response = await api.post("users", {
            user: {
                ...user,
                created_at: Date.now()
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        }
    });
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    });

    const { errors, isValid, isSubmitting } = formState;

    async function handleUserCreateSubmit(value) {
        await createUser.mutateAsync(value);

        router.push("/users");
    }

    return (
        <Box>
            <Head>
                <title>Dashgo | Criação de Usuário</title>
            </Head>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box as="form" onSubmit={handleSubmit(handleUserCreateSubmit)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>

                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="name" error={errors.name} label="Nome completo" placeholder="Ex: Fulano da Silva" {...register('name')} />
                            <Input name="email" error={errors.email} type="email" label="E-mail" placeholder="Ex: email@email.com" {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input name="password" error={errors.password} type="password" label="Senha" placeholder="Digite a sua senha" {...register('password')} />
                            <Input name="passwordconfirmation" error={errors.passwordConfirmation} type="password" label="Confirmação da senha" placeholder="Confirme a senha" {...register('passwordConfirmation')} />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>

                            <Button isLoading={isSubmitting} type='submit' colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}