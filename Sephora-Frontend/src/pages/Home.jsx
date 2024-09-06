import { Box, Divider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Slider1 from "../components/HomePage/Slider1";
import Footer from "../components/Footer";
import Slider2 from "../components/HomePage/Slider2";
import Slider3 from "../components/HomePage/Slider3";
import Slider4 from "../components/HomePage/Slider4";
import Section1 from "../components/HomePage/Section1";
import Section4 from "../components/HomePage/Section4";
import Slider5 from "../components/HomePage/Slider5";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Section1 />
      <Slider5 />
      <Divider w={"80%"} m={"auto"} />
      <Section2 />
      <Divider w={"80%"} m={"auto"} />
      <Section3 />
      <Divider w={"80%"} m={"auto"} />

      <Section4 />
      <Footer />
    </Box>
  );
};

export default Home;
