
import { Link as ChakraLink, Icon, Text } from '@chakra-ui/react';
import NavLink from "next/link";
import { ReactNode } from 'react';
import { ActiveLink } from '../ActiveLink';

interface LinkProps {
    hoverColor?: string,
    icon?: ReactNode | any,
    title: string
    href: string
}

export function Link({ hoverColor = "pink.400", icon, title, href }: LinkProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display="flex" align="center" _hover={{ color: hoverColor }}>
                {!!icon &&
                    <Icon as={icon} fontSize="20" />}
                <Text ml="4" fontWeight="medium">{title}</Text>
            </ChakraLink>
        </ActiveLink>

    )
}