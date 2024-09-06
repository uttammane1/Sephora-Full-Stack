import { Box } from "@chakra-ui/react";
import Header from "./Navbar/Header";
import Navbar1 from "./Navbar/Navbar1";
import Navbar2 from "./Navbar/Navbar2";
import Navbar3 from "./Navbar/Navbar3";

const Navbar = () => {
  return (
    <Box>
      {/* *-----------------------------Header 1---------------------------* */}
      <Header />

      {/* *--------------------------------Navbar 1 ----------------------------* */}

      <Navbar1 />

      {/* *---------------------------Navbar 2----------------------------------* */}
      <Navbar2 />

      {/* *------------------------Small Screen Navbar3-----------------------------* */}
      <Navbar3 />
    </Box>
  );
};

export default Navbar;
