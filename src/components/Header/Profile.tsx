import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps{
    name:string,
    avatar_url?:string
    email:string
}
export function Profile({name,avatar_url,email}:ProfileProps) {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>{name}</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    {email}
                </Text>
            </Box>

            <Avatar size="md" name={name} src={avatar_url} />
        </Flex>
    )
}