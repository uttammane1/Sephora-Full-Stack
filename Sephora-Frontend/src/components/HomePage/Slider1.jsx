import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import slides from "../../Utils/Homepage/Slider1";
import { useNavigate } from "react-router-dom";
const Slider1 = () => {
  const handleNavigation = useNavigate();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const ImgBox = ({ src, category }) => {
    return (
      <Img onClick={() => handleClick(category)} cursor={"pointer"} src={src} />
    );
  };

  return (
    <Box className="slider-container">
      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid color={elem.clr} key={i} cursor={"pointer"} p={"10px"}>
            <Box>
              <ImgBox src={elem.img} category={elem.category} />
            </Box>
            <Box p={"20px"} textAlign={"left"} bgColor={elem.bg} h={"150px"}>
              <Text fontWeight={700} fontSize={"20px"}>
                {elem.title}
              </Text>
              <Text
                fontSize={"14px"}
                _hover={{ textDecoration: "underline" }}
                mb={"5px"}
              >
                {elem.description}
              </Text>
              <Text fontSize={"14px"} fontWeight={700}>
                SHOP NOW ▸
              </Text>
            </Box>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider1;
