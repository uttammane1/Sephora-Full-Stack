import { Box } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      textAlign={"center"}
      p={["5px", "5px", "18px", "18px"]}
      bgColor={"#C0DCF1"}
      fontSize={"14px"}
      fontWeight={700}
      _hover={{ textDecoration: "underline" }}
      cursor={"pointer"}
    >
      Don't miss out!{" "}
      <span style={{ fontWeight: "400" }}>
        {" "}
        So many deals, trial sizes, sample sets and more.
      </span>{" "}
      Shop Beauty Offers
    </Box>
  );
};

export default Header;
