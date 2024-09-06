import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import slides from "../../Utils/Homepage/Slider4";
import { useNavigate } from "react-router-dom";

const Slider4 = () => {
  const handleNavigation = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "grey",
          borderRadius: "100px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "grey", borderRadius: "100px" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
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

  const ButtonBox = ({ text, category }) => {
    return (
      <Button
        border={"1px solid black"}
        bgColor={"white"}
        color={"black"}
        borderRadius={"20px"}
        onClick={() => handleClick(category)}
      >
        {text}
      </Button>
    );
  };

  return (
    <Box p={["2", "7", "10", "40"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Text fontWeight={650} fontSize={"21px"}>
        New Arrivals
      </Text>

      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid key={i} cursor={"pointer"} padding={"10px"}>
            <SimpleGrid boxShadow={"base"} h={"500px"}>
              <Box mb={"10px"} w={"100%"}>
                <img src={elem.image} alt="slider" width={"100%"} />
              </Box>

              <SimpleGrid
                gridTemplateColumns={"1fr"}
                px={"20px"}
                h={["200px", "200px", "170px", "300px"]}
              >
                <SimpleGrid alignItems={"start"}>
                  <Text fontSize={"16px"} fontWeight={700}>
                    {elem.title}
                  </Text>
                  <Text fontSize={"15px"} fontWeight={600}>
                    {elem.title2}
                  </Text>
                  <Text fontWeight={400} fontSize={"11px"}>
                    {elem.description}
                  </Text>
                </SimpleGrid>

                <Flex alignItems={"end"}>
                  <ButtonBox text={"Apply"} category={elem.category} />
                </Flex>
              </SimpleGrid>
            </SimpleGrid>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider4;
