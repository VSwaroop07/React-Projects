import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { LuUserCircle2 } from "react-icons/lu";
const TopNav = ({title}) => {
  return (
    <Box>
      <HStack maxW='70rem'  h="16" justify="space-between"  mx='auto'>
    <Heading fontSize='28px' fontWeight='medium'>{title}</Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={LuUserCircle2} fontSize='24px'/>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Stats</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
