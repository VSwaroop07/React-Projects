import { Box, Container, Flex } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import { Children } from "react"

const Layout = ({title, children}) => {
  return (
    <Flex>
      <SideNav />
      <Box flexGrow={1}>
        <TopNav title={title} />
        <Container maxW='70rem'>{children}</Container>
      </Box>
    </Flex>
  )
}

export default Layout