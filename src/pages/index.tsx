import { Flex, Button, Stack } from "@chakra-ui/react";
import Head  from "next/head";
import { useRouter } from "next/router";
import { Input } from "../components/Form/Input";

export default function Home() {

    const router = useRouter();
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
                
            >
                <Stack spacing={4}>

                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        placeholder="email@email.com"
                    />

                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        placeholder="***********"
                    />

                </Stack>




                <Button 
                    as="a"
                    mt={6} 
                    href="/dashboard" 
                    colorScheme="pink" 
                    size="lg"
                    >
                    Entrar
                </Button>
            </Flex>
        </Flex>
        </>


    )
}
