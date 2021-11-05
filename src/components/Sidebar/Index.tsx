import { Box, Stack, Text, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiInputMethodLine } from "react-icons/ri";
import { Link } from "./Link";
import { MenuSection } from "./Section";

export function Sidebar() {

    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">

                <MenuSection title="GERAL">
                    <Link title="Dashboard" icon={RiDashboardLine} />
                    <Link title="Usuários" icon={RiContactsLine} />
                </MenuSection>

                
                <MenuSection title="AUTOMAÇÃO">
                    <Link title="Formulários" icon={RiInputMethodLine} />
                    <Link title="BatchInput" icon={RiContactsLine} />
                </MenuSection>

            </Stack>
        </Box>
    )
}