import { Box, Divider, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import slides from "../../Utils/Homepage/Slider5";
import { useNavigate } from "react-router-dom";

const Slider5 = () => {
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
    slidesToShow: 6,
    slidesToScroll: 6,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const ImgBox = ({ src, category }) => {
    return (
      <Img
        onClick={() => handleClick(category)}
        alt="slider"
        width={"100%"}
        src={src}
      />
    );
  };

  return (
    <Box p={["2", "2", "10", "40"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Text fontWeight={650} fontSize={"21px"}>
        Beauty Insider Rewards
      </Text>

      <Slider {...settings}>
        {slides.map((elem, i) => (
          <SimpleGrid key={i} cursor={"pointer"} padding={"10px"}>
            <SimpleGrid
              boxShadow={"base"}
              transition={"all .5s ease"}
              _hover={{ transform: "translateY(-5px)" }}
              p={["10px", "10px", "20px", "30px"]}
            >
              <Box mb={"10px"} mx={"auto"} w={"150px"}>
                <ImgBox src={elem.image} category={elem.category} />
              </Box>

              <Text fontSize={"14px"} fontWeight={700}>
                {elem.title}
              </Text>
              <Text fontWeight={400} fontSize={"12px"}>
                {elem.description}
              </Text>
              <Text fontSize={"15px"} fontWeight={700}>
                {elem.points}
              </Text>
            </SimpleGrid>
          </SimpleGrid>
        ))}
      </Slider>
    </Box>
  );
};

export default Slider5;
