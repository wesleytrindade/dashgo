import { Flex} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
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

          <Logo/>

          <SearchBox/>

            <Flex
                align="center"
                ml="auto">
                
                <NotificationsNav/>

                <Profile name="Wesley Guarnieri" email="wesley.guarnieri@hotmail.com" avatar_url="https://github.com/wesleytrindade.png"/>
              
            </Flex>
        </Flex>
    )
}