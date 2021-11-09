import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";



export function Header() {

    const { onOpen } = useSidebarDrawer();
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });

    return (
        <Flex
            as="header"
            width="100%"
            maxWidth={1480}
            height="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            {!isWideVersion &&
                <IconButton
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    aria-label="Open navigation"
                    mr="2"
                />
            }
            <Logo />
            {isWideVersion && <SearchBox />}

            <Flex
                align="center"
                ml="auto">

                <NotificationsNav />

                <Profile
                    name="Wesley Guarnieri"
                    email="wesley.guarnieri@hotmail.com"
                    avatar_url="https://github.com/wesleytrindade.png"
                    showProfileData={isWideVersion}
                />

            </Flex>
        </Flex>
    )
}