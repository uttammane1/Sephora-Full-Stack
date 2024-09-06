import { Box, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  const handleNavigation = useNavigate();

  const cards = [
    {
      img: "https://www.sephora.com/contentimages/2024-7-20-rare-beauty-true-to-myself-tinted-powder-site-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=400",
      title: "New from Rare Beauty",
      description:
        "Blur, smooth, and set with the True to Myself Tinted Pressed Finishing Powder.",
      bg: "#6A3734",
      clr: "white",
      category: "Makeup",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-7-28-black-owned-brands-site-desktop-mobile-app-home-page-rwd-marketing-banner-800x534-en-us.jpg?imwidth=315",
      title: "The Need-to-Know",
      description:
        "Hot drops from Danessa Myricks Beauty, adwoa beauty, FORVR Mood, and EADEM.",
      bg: "#97B9AB",
      clr: "black",
      category: "Hair",
    },
    {
      img: "https://www.sephora.com/contentimages/2024-cc-optimizations-bundle-a-site-mobile-home-page-rwd-marketing-banner-option-2-us-final.jpg?imwidth=315",
      title: "Earn $150 in Credit Card Rewards‡‡ LEARN MORE & APPLY NOW▸",
      description: "",
      bg: "#5DB7B5",
      clr: "black",
      category: "Gift And Gift Card",
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

export default Section1;
