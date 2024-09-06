import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Img,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiBell, BiCurrentLocation, BiMessage } from "react-icons/bi";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiBasketLight } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
import SearchInput from "./SearchInput";
const Navbar1 = () => {
  const { isLogin } = useSelector((state) => state.loginState);
  const handleNavigation = useNavigate();

  const data = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleClick = (elem) => {
    const category = elem;
    handleNavigation(`/products`);
    handleNavigation(
      `/products?category=${category.replace(" & ", "%20%26%20")}`
    );
    onclose();
  };

  const TextCreate = ({ text, fontWeight, category }) => {
    return (
      <Text
        _hover={{ textDecoration: "underline" }}
        fontWeight={fontWeight}
        fontSize={"14px"}
        onClick={() => handleClick(category)}
        cursor={"pointer"}
      >
        {text}
      </Text>
    );
  };

  return (
    <Box>
      <SimpleGrid
        gridTemplateColumns={[
          ".8fr 1fr .7fr",
          ".8fr 1fr .7fr",
          "1fr 2fr 1fr",
          "1fr 1fr 2fr .5fr",
        ]}
        p={["0", "0px", "20px", "30px"]}
        pt={["10px", "10px", "20px", "30px"]}
        pb={["10px", "10px", "20px", "30px"]}
        alignItems={"center"}
        justifyContent={"center"}
        m={"auto"}
        gap={["5px", "5px", "40px", "20px"]}
      >
        <Link to={"/"}>
          <Text
            fontWeight={600}
            fontSize={["14px", "20px", "24px", "24px"]}
            textAlign={["center", "center", "right", "right"]}
          >
            S E P H O R A
          </Text>
        </Link>
        <Box>
          <SearchInput />
        </Box>
        <Flex
          gap={"40px"}
          alignItems={"center"}
          display={["none", "none", "none", "flex"]}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                bgColor={"white"}
                borderRadius={"none"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                  <HiOutlineBuildingStorefront />{" "}
                  <Text fontSize={"14px"}>
                    Stores & Services{" "}
                    <Text fontSize={"10px"}>Choose Your Store</Text>
                  </Text>
                </Flex>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader textAlign={"center"} p={"18px"}>
                <Button bgColor={"black"} color={"white"} borderRadius={"20px"}>
                  Choose Your Store
                </Button>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  alignItems={"center"}
                  gap={"7px"}
                  cursor={"pointer"}
                  pt={"12px"}
                  pb={"12px"}
                >
                  <BiCurrentLocation />
                  <Text
                    fontSize={"14px"}
                    fontWeight={600}
                    _hover={{ textDecoration: "underline" }}
                  >
                    Find a Sephora
                  </Text>
                </Flex>
                <Divider />
                <SimpleGrid spacing={"17px"} pt={"12px"} pb={"12px"}>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_makeup.svg" />
                    </Box>
                    <Text>
                      Makeup Services
                      <Text fontSize={"10px"} color={"grey"}>
                        One-on-one makeup application or beauty lesson
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_skincare.svg" />
                    </Box>
                    <Text>
                      Skincare Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Hydrating and exfoliating Perk treatments by Hydrafacial
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img src="https://www.sephora.com/contentimages/happening/flyoutmenu_waxing.svg" />
                    </Box>
                    <Text>
                      Waxing Services
                      <Text fontSize={"10px"} color={"grey"}>
                        Expert grooming for brows, upper lip, or chin
                      </Text>
                    </Text>
                  </Flex>

                  <Flex alignItems={"center"} gap={"10px"}>
                    <Box>
                      <Img
                        src="https://www.sephora.com/contentimages/happening/flyoutmenu_events.svg"
                        w={"65px"}
                      />
                    </Box>
                    <Text>
                      Events
                      <Text fontSize={"10px"} color={"grey"}>
                        Learn about brands, try new products, and more at out
                        in-store events
                      </Text>
                    </Text>
                  </Flex>
                </SimpleGrid>
                <Flex
                  color={"blue"}
                  cursor={"pointer"}
                  pt={"15px"}
                  pb={"15px"}
                  fontSize={"14px"}
                  gap={"12px"}
                >
                  <Text _hover={{ textDecoration: "underline" }}>
                    My Reservation
                  </Text>
                  <Text>|</Text>
                  <Text _hover={{ textDecoration: "underline" }}>
                    Beauty Service FAQs
                  </Text>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            {isLogin || data?.isAuth ? (
              <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                <HiOutlineUserGroup />
                <Text fontSize={"14px"}>Hi, {data?.data}</Text>
              </Flex>
            ) : (
              <PopoverTrigger>
                <Button
                  bgColor={"white"}
                  borderRadius={"none"}
                  _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
                >
                  <Flex fontSize={"3xl"} alignItems={"center"} gap={"10px"}>
                    <HiOutlineUserGroup />
                    <Text fontSize={"14px"}>Community</Text>
                  </Flex>
                </Button>
              </PopoverTrigger>
            )}
            <PopoverContent>
              <PopoverHeader>
                <Flex alignItems={"center"} gap={"12px"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
                    />
                  </Box>
                  <Text fontWeight={700} fontSize={"14px"} mr={"20px"}>
                    Community Profile{" "}
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in to see your profile
                    </Text>
                  </Text>
                  <BiBell size={"25px"} />
                  <BiMessage size={"25px"} />
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  pt={"8px"}
                  pb={"14px"}
                >
                  <Box w={"50%"}>
                    <Login />
                  </Box>
                  <Signup />
                </Flex>
                <Divider color={"grey"} />

                <SimpleGrid spacing={"15px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"80px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Community Home
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Ask questions, join challanges, and get recommendations
                        from people like you
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"50px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Groups
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Discover topics tailored to your beauty interests
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"70px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      Gallery
                      <Text color={"grey"} fontWeight={400} fontSize={"11px"}>
                        Add your photos and video and get inspired by fellow
                        beauty lovers
                      </Text>
                    </Text>
                  </Flex>
                  <Divider color={"grey"} />
                </SimpleGrid>
                <SimpleGrid spacing={"12px"}>
                  <Text fontWeight={700} fontSize={"14px"}>
                    Featured Groups
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Trending at Sephora
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Best Hair Ever
                  </Text>
                  <Text fontSize={"12px"} fontWeight={400}>
                    Lip Lovers
                  </Text>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover">
            {isLogin || data?.isAuth ? (
              <Button
                onClick={handleLogout}
                bgColor={"white"}
                borderRadius={"none"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                Logout
              </Button>
            ) : (
              <PopoverTrigger>
                <Button
                  bgColor={"white"}
                  borderRadius={"none"}
                  _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
                >
                  {" "}
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box>
                      <Image
                        src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                        w={"30px"}
                      />{" "}
                    </Box>
                    <Text fontSize={"14px"} fontWeight={600}>
                      Sign In
                      <Text fontSize={"10px"} fontWeight={400}>
                        for FREE Shipping 🚚
                      </Text>
                    </Text>
                  </Flex>
                </Button>
              </PopoverTrigger>
            )}
            <PopoverContent>
              <PopoverHeader>
                <Flex alignItems={"center"} gap={"12px"}>
                  <Box>
                    <Image
                      src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                      w={"50px"}
                    />
                  </Box>
                  <Text fontWeight={700} fontSize={"14px"} mr={"20px"}>
                    Good evening, Beautiful. 🌙{" "}
                    <Text fontSize={"10px"} fontWeight={400} color={"grey"}>
                      Sign in for{" "}
                      <span style={{ fontWeight: "600" }}>
                        Free standard shipping
                      </span>{" "}
                      on all the orders.
                    </Text>
                  </Text>
                </Flex>
              </PopoverHeader>
              <PopoverBody>
                <Flex
                  justifyContent={"center"}
                  gap={"12px"}
                  pt={"8px"}
                  pb={"14px"}
                >
                  <Box w={"50%"}>
                    <Login />
                  </Box>

                  <Signup />
                </Flex>
                <Divider color={"grey"} />
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"right"}
          pr={["5px", "5px", "10px", "10px"]}
        >
          <Popover trigger="hover">
            <PopoverTrigger>
              <Button
                borderRadius={"none"}
                bgColor={"white"}
                _hover={{ bgColor: "white", borderBottom: "2px solid #333" }}
              >
                <Link to={"/cart"}>
                  <Flex fontSize={"3xl"}>
                    <PiBasketLight />
                  </Flex>
                </Link>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader fontWeight={700} fontSize={"14px"}>
                Basket
              </PopoverHeader>
              <PopoverBody>
                <SimpleGrid spacing={"15px"}>
                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/img/ufe/icons/rewards-bazaar.svg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontWeight={400} fontSize={"12px"}>
                      See samples, rewards, and promos in basket.
                    </Text>
                  </Flex>
                  <Divider />

                  <Flex gap={"10px"} alignItems={"center"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/contentimages/homepage/050124/2024-july-hair-story-site-home-page-RWD-hero-banner-air-dry-us-can-release-image-only-2000x2000.jpeg?imwidth=545"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontWeight={400} fontSize={"11px"}>
                      Beauty Insiders enjoy{" "}
                      <span style={{ fontWeight: "600" }}>
                        FREE standard shipping
                      </span>{" "}
                      on all orders.
                    </Text>
                  </Flex>
                  <Divider />

                  <Flex gap={"10px"} alignItems={"start"}>
                    <Box w={"30px"}>
                      <Img
                        src="https://www.sephora.com/img/ufe/icons/cc-outline.svg"
                        w={"100%"}
                      />
                    </Box>
                    <Text fontSize={"16px"}>
                      The Sephora Credit Card Program
                      <Text fontWeight={400} fontSize={"11px"}>
                        Save 25% on this order when you open and use either
                        Sephora Credit Card today
                      </Text>
                    </Text>
                  </Flex>
                  <Divider />
                  <Link to={"/cart"}>
                    <Button
                      bgColor={"white"}
                      color={"black"}
                      border={"1px solid black"}
                      w={"2x1"}
                      borderRadius={"20px"}
                    >
                      SEE DETAILS
                    </Button>
                  </Link>
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <HamburgerIcon
                display={["block", "block", "block", "none"]}
                cursor={"pointer"}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader
                fontWeight={700}
                fontSize={"14px"}
                pt={"10px"}
                pb={"10px"}
              >
                Categories
              </PopoverHeader>
              <PopoverBody>
                <SimpleGrid spacing={"12px"}>
                  <TextCreate text={"Makeup"} category={"Makeup"} />
                  <TextCreate text={"Skincare"} category={"Skincare"} />
                  <TextCreate text={"Hair"} category={"Hair"} />
                  <TextCreate text={"Fragrance"} category={"Makeup"} />
                  <TextCreate
                    text={"Tools &Brushes"}
                    category={"Tools&Brushes"}
                  />
                  <TextCreate text={"Bath & Body"} category={"Bath And Body"} />
                  <TextCreate
                    text={"Gifts & Gift Cards"}
                    category={"Gift And Gift Card"}
                  />
                  <TextCreate text={"Sales & Offers"} category={"Hair"} />
                </SimpleGrid>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Navbar1;
