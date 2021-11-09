import { RiDashboardLine, RiContactsLine, RiInputMethodLine } from "react-icons/ri";
import { Stack } from '@chakra-ui/react';
import { MenuSection } from "./Section";
import { Link } from "./Link";

export function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">

            <MenuSection title="GERAL">
                <Link title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
                <Link title="Usuários" icon={RiContactsLine} href="/users" />
            </MenuSection>


            <MenuSection title="AUTOMAÇÃO">
                <Link title="Formulários" icon={RiInputMethodLine} href="/forms" />
                <Link title="BatchInput" icon={RiContactsLine} href="/batchinput" />
            </MenuSection>

        </Stack>
    )
}