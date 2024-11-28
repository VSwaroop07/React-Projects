import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { MdSpaceDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navLinks = [
    {
      icon: MdSpaceDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Trasnactions",
      link: "/transation",
    },
  ];
  return (
    <Stack justify="space-between" boxShadow="lg" w="16rem" h="100vh">
      <Box>
        <Heading as="h1" fontSize="22px" pt="56px" textAlign="center">
          TreadX
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              borderRadius="10px"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="semibold">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb='6'>
        <HStack
          py="3"
          px="4"
          borderRadius="10px"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="semibold">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
