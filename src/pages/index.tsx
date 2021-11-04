import { Flex, Input, Button } from "@chakra-ui/react";


export default function Home() {
    return (
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
                <Input 
                name="email" 
                type="email" 
                placeholder="email@login.com"
                />
                <Input name="password" mt={2} type="password" placeholder="*********" />

                <Button mt={6} type="submit" colorScheme = "pink">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
