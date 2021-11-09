import { Flex, Button, Stack, FormErrorMessage } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { Input } from "../components/Form/Input";

interface SignInFormData {
    email: string;
    password: string
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required('Digite o email!').email('E-mail inválido!'),
    password: yup.string().required('Digite a senha!')
});


export default function SignIn() {

    const router = useRouter();
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInFormSchema)
    });

    const { errors, isValid, isSubmitting } = formState;



    const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {

    }
    return (
        <>
            <Head>
                <title>Dashgo | Login</title>
            </Head>
            <Flex
                w="100vw"
                h="100vh"
                alignItems="center"
                justify="center"

            >

                <Flex
                    as="form"
                    w="100%"
                    maxWidth={360}
                    bg="gray.800"
                    padding={8}
                    borderRadius={8}
                    direction="column"
                    onSubmit={handleSubmit(handleSignIn)}

                >
                    <Stack spacing={4}>

                        <Input
                            name="email"
                            type="email"
                            label="E-mail"
                            error={errors.email}
                            placeholder="email@email.com"
                            {...register('email')}
                        />



                        <Input
                            name="password"
                            type="password"
                            label="Senha"
                            error={errors.password}
                            placeholder="***********"
                            {...register('password')}
                        />

                    </Stack>

                    <Button
                        type="submit"
                        mt={6}
                        colorScheme="pink"
                        size="lg"
                        isLoading={isSubmitting}
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
        </>


    )
}
