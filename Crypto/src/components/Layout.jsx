import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import SideDrawar from "./SideDrawar"

const Layout = ({title, children}) => {
    const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <Flex>
      <Box display={{
        base: "none",
        lg: "flex"
      }}>
      <SideNav />
      </Box>
      <SideDrawar isOpen={isOpen} onClose={onClose} /> 
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen}  />
        <Container maxW='70rem'>{children}</Container>
      </Box>
    </Flex>
  )
}

export default Layout