import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Section4 = () => {
  const handleNavigation = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/homepage/050124/sephoia%2079.JPG?imwidth=400",
      title: "SEPHORiA is Coming to Atlanta",
      description:
        "The brand experiences, legendary gift bags, master classes, and more are back 9/27-9/28.",
      bg: "black",
      clr: "white",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-07-15-slotting-baar-site-rwd-home-page-marketing-banner-farmacy-US_01.jpg?imwidth=315",
      title: "Auto-Replenish Hot Deal",
      description: "Get 10% off1 select Farmacy subscription deliveries. ",
      bg: "#F58C89",
      clr: "black",
      category: "Gift And Gift Card",
    },
    {
      img: "https://www.sephora.com/contentimages/2023-06-02-RWD-homepage-site-desktop-mobile-home-page-marketing-banner-800x534-beauty-on-demand-release.jpg?imwidth=315",
      title: "Beauty on Demand",
      description: "Fast and easy options that work for you.",
      bg: "#BDDCEE",
      clr: "black",
      category: "Makeup",
    },
  ];

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
    <Box>
      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr", "repeat(2,1fr)", "repeat(3,1fr)"]}
        spacing={"20px"}
        px={["2", "2", "10", "40"]}
        py={"30px"}
      >
        {cards.map((elem, i) => (
          <SimpleGrid color={elem.clr} key={i} cursor={"pointer"}>
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
      </SimpleGrid>
    </Box>
  );
};

export default Section4;
