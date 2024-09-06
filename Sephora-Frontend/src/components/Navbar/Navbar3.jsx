import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Login from "../../pages/Login";
import { useSelector } from "react-redux";

const Navbar3 = () => {
  const { isLogin } = useSelector((state) => state.loginState);
  const data = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <Box>
      {isLogin || data?.isAuth ? (
        <Flex
          display={["flex", "flex", "flex", "none"]}
          justifyContent={"space-around"}
          boxShadow={"base"}
          py={"10px"}
        >
          <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
            <Box w={"30px"}>
              <Image
                src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                w={"100%"}
              />
            </Box>
            <Text fontSize={"14px"}>Hi, {data?.data} ✌🏽</Text>
          </Flex>
          <Button
            onClick={handleLogout}
            bgColor={"white"}
            borderRadius={"none"}
            _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
          >
            Logout
          </Button>
        </Flex>
      ) : (
        <Flex
          display={["flex", "flex", "flex", "none"]}
          justifyContent={"space-around"}
          boxShadow={"base"}
          py={"10px"}
        >
          <Text fontSize={"14px"} fontWeight={700}>
            Sign In for FREE Shipping 🚚
            <Text fontWeight={500} fontSize={"12px"}>
              Don’t have an account?
            </Text>
          </Text>

          <Login />
        </Flex>
      )}
    </Box>
  );
};

export default Navbar3;
