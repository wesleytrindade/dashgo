
import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LinkProps {
    hoverColor?: string,
    icon?: ReactNode | any,
    title: string
}

export function Link({ hoverColor = "pink.400", icon, title }: LinkProps) {
    return (
        <ChakraLink display="flex" align="center" _hover={{ color: hoverColor }}>
            {!!icon &&
                <Icon as={icon} fontSize="20" />}
            <Text ml="4" fontWeight="medium">{title}</Text>
        </ChakraLink>
    )
}