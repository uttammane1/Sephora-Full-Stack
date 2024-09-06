import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Img,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { IoChatbubbleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <Box
        bgColor={"#CCCCCC"}
        fontSize={"14px"}
        fontWeight={700}
        textAlign={"center"}
        mt={"30px"}
        p={"10px"}
      >
        {" "}
        <Text>Website feedback? Let us know ▸</Text>
      </Box>

      <SimpleGrid
        bgColor={"black"}
        color={"white"}
        py={"20px"}
        px={["15px", "15px", "50px", "100px"]}
        maxW={"100vw"}
        spacingY={"20px"}
      >
        <SimpleGrid
          gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "repeat(5,1fr)"]}
          spacing={"12px"}
        >
          <Flex alignItems={"start"} gap={"7px"}>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/find-store.svg" />
            </Box>{" "}
            <Text fontWeight={700} fontSize={"14px"}>
              Find a Store{" "}
              <Text fontWeight={200} fontSize={"12px"}>
                Choose Your Store{" "}
              </Text>
            </Text>
          </Flex>

          <Flex alignItems={"start"} gap={"7px"}>
            <Box fontSize={"2xl"}>
              <IoChatbubbleOutline />
            </Box>{" "}
            <Text fontWeight={700} fontSize={"14px"}>
              Customer Service{" "}
              <Text fontWeight={400} fontSize={"12px"}>
                Chat is unavailable
              </Text>{" "}
            </Text>
          </Flex>

          <Flex alignItems={"start"} gap={"7px"}>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/app.svg" />
            </Box>{" "}
            <Text fontWeight={700} fontSize={"14px"}>
              Get the App
              <Text fontWeight={400} fontSize={"12px"}>
                Download Now{" "}
              </Text>{" "}
            </Text>
          </Flex>

          <Flex alignItems={"start"} gap={"7px"}>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/sms-ko.svg" />
            </Box>{" "}
            <Text fontWeight={700} fontSize={"14px"}>
              Get Sephora Text Alerts
              <Text fontWeight={400} fontSize={"12px"}>
                {" "}
                Sign up Now{" "}
              </Text>{" "}
            </Text>
          </Flex>

          <Flex alignItems={"start"} gap={"7px"}>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/cc-outline-ko.svg" />
            </Box>{" "}
            <Text fontWeight={700} fontSize={"14px"}>
              Sephora Credit Card Program
              <Text fontWeight={400} fontSize={"12px"}>
                Want 25% off your Sephora purchase1? DETAILS{" "}
              </Text>
            </Text>
          </Flex>
        </SimpleGrid>

        <Divider
          color={"whitesmoke"}
          display={["none", "none", "none", "block"]}
        />

        <SimpleGrid columns={[1, 1, 1, 2]} spacing={"30px"}>
          <SimpleGrid columns={3} display={["none", "none", "none", "grid"]}>
            <SimpleGrid spacing={"7px"} cursor={"pointer"}>
              <Text fontSize={"15px"} fontWeight={700}>
                About Sephora
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                About Sephora
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Newsroom
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Careers
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora Values
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Supply Chain Transparency
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Affiliates
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora Events
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Gift Cards
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora Global Sites
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Diversity, Equity & Inclusion
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora Accelerate
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Beauty (Re)Purposed
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Report a Vulnerability
              </Text>
            </SimpleGrid>

            <SimpleGrid spacing={"7px"} cursor={"pointer"}>
              <Text fontSize={"15px"} fontWeight={700}>
                My Sephora
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Beauty Insider
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora Credit Card
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Community Profile
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Order Status
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Purchase History
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Account Settings
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Beauty Advisor Recommendations
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Auto-Replenishment
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Beauty Offers
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Buying Guides
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Rewards Bazaar
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Loves
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Book a Reservation
              </Text>
            </SimpleGrid>

            <SimpleGrid spacing={"7px"} cursor={"pointer"}>
              <Text fontSize={"15px"} fontWeight={700}>
                Help
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Customer Service
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Returns & Exchanges
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Delivery and Pickup Options
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Shipping
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Billing
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                International Shipments
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Beauty Services FAQ
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Sephora at Kohl's
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Store Locations
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Online Ordering
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Flexible Payments
              </Text>
              <Text fontSize={"12px"} _hover={{ textDecoration: "underline" }}>
                Accessibility
              </Text>
            </SimpleGrid>
          </SimpleGrid>

          <Accordion
            allowToggle
            my={"20px"}
            display={["block", "block", "block", "none"]}
          >
            <AccordionItem>
              <h2>
                <AccordionButton py={"20px"}>
                  <Box as="span" flex="1" textAlign="left">
                    About Sephora
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                  <Text>About Sephora</Text>
                  <Text>Newsroom</Text>
                  <Text>Careers</Text>
                  <Text>Sephora Values</Text>
                  <Text>Supply Chain Transparency</Text>
                  <Text>Affiliates</Text>
                  <Text>Sephora Events</Text>
                  <Text>Gift Cards</Text>
                  <Text>Sephora Global Sites</Text>
                  <Text>Diversity, Equity & Inclusion</Text>
                  <Text>Sephora Accelerate</Text>
                  <Text>Beauty (Re)Purposed</Text>
                  <Text> Report a Vulnerability</Text>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton py={"20px"}>
                  <Box as="span" flex="1" textAlign="left">
                    My Sephora
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                  <Text>Beauty Insider</Text>
                  <Text>Sephora Credit Card</Text>
                  <Text>Community Profile</Text>
                  <Text>Order Status</Text>
                  <Text>Purchase History</Text>
                  <Text>Account Settings</Text>
                  <Text>Beauty Advisor Recommendations</Text>
                  <Text>Auto-Replenishment</Text>
                  <Text>Beauty Offers</Text>
                  <Text>Buying Guides</Text>
                  <Text>Rewards Bazaar</Text>
                  <Text>Loves</Text>
                  <Text> Book a Reservation</Text>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton py={"20px"}>
                  <Box as="span" flex="1" textAlign="left">
                    Help
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel py={4}>
                <SimpleGrid fontSize={"14px"} spacing={"5px"}>
                  <Text>Customer Service</Text>
                  <Text>Returns & Exchanges</Text>
                  <Text>Delivery and Pickup Options</Text>
                  <Text>Shipping</Text>
                  <Text>Billing</Text>
                  <Text>International Shipments</Text>
                  <Text>Beauty Services FAQ</Text>
                  <Text>Sephora at Kohl's</Text>
                  <Text>Store Locations</Text>
                  <Text>Online Ordering</Text>
                  <Text>Flexible Payments</Text>
                  <Text> Accessibility</Text>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <SimpleGrid
            gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 2fr"]}
            spacing={"30px"}
          >
            <SimpleGrid
              spacing={"10px"}
              cursor={"pointer"}
              alignContent={"start"}
            >
              <Text fontSize={"15px"} fontWeight={700}>
                Region & Language
              </Text>
              <Flex alignItems={"center"} gap={"12px"}>
                <Box w={"22px"}>
                  <Img
                    src="https://www.sephora.com/img/ufe/flags/us.svg"
                    w={"100%"}
                  />
                </Box>
                <Text
                  fontSize={"12px"}
                  _hover={{ textDecoration: "underline" }}
                >
                  United States - English
                </Text>
              </Flex>

              <Flex alignItems={"center"} gap={"12px"}>
                <Box w={"22px"}>
                  <Img
                    src="https://www.sephora.com/img/ufe/flags/ca.svg"
                    w={"100%"}
                  />
                </Box>
                <Text
                  fontSize={"12px"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Canada - English
                </Text>
              </Flex>

              <Flex alignItems={"center"} gap={"12px"}>
                <Box w={"22px"}>
                  <Img
                    src="https://www.sephora.com/img/ufe/flags/ca.svg"
                    w={"100%"}
                  />
                </Box>
                <Text
                  fontSize={"12px"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Canada - Français
                </Text>
              </Flex>
            </SimpleGrid>

            <Divider display={["block", "block", "block", "none"]} />

            <SimpleGrid alignContent={"space-between"} spacing={"30px"}>
              <Box
                fontSize={["22px", "22px", "28px", "28px"]}
                fontFamily={"georgia, times, serif"}
              >
                <Text>We Belong to</Text>
                <Text>Something Beautiful</Text>
              </Box>

              <SimpleGrid spacing={"20px"}>
                <SimpleGrid spacing={"7px"}>
                  <Text fontSize={"14px"} fontWeight={700}>
                    Sign up for Sephora text updates
                  </Text>
                  <Flex gap={"10px"}>
                    <Input
                      placeholder="Mobile Phone Number"
                      border={"none"}
                      bgColor={"white"}
                      color={"black"}
                    />
                    <Button
                      bgColor={"black"}
                      color={"white"}
                      border={"1px solid white"}
                      borderRadius={"20px"}
                      _hover={{ backgroundColor: "black", color: "grey" }}
                    >
                      Continue
                    </Button>
                  </Flex>
                </SimpleGrid>

                <SimpleGrid spacing={"7px"}>
                  <Text fontSize={"14px"} fontWeight={700}>
                    Sign up for Sephora text updates
                  </Text>
                  <Flex gap={"10px"}>
                    <Input
                      placeholder="Enter your email address"
                      border={"none"}
                      bgColor={"white"}
                      color={"black"}
                    />
                    <Button
                      bgColor={"black"}
                      color={"white"}
                      border={"1px solid white"}
                      borderRadius={"20px"}
                      _hover={{ backgroundColor: "black", color: "grey" }}
                    >
                      Sign Up
                    </Button>
                  </Flex>
                </SimpleGrid>
              </SimpleGrid>
            </SimpleGrid>
          </SimpleGrid>
        </SimpleGrid>
        <Divider />

        <SimpleGrid
          justifyContent={"space-between"}
          gridTemplateColumns={["1fr", "1fr", "1fr", "repeat(2,1fr)"]}
          w={"100%"}
          spacing={"20px"}
        >
          <SimpleGrid fontSize={"12px"} fontWeight={400} gap={"12px"}>
            <Text>© 2024 Sephora USA, Inc. All rights reserved.</Text>
            <Flex gap={"8px"} flexWrap={"wrap"}>
              <Text>Privacy Policy</Text>
              <Text>Terms of Use</Text>
              <Text>Accessibility</Text>
              <Text>Sitemap</Text>
              <Flex alignItems={"center"} gap={"5px"}>
                <Text>Your Privacy Choices</Text>
                <Box w={"20px"}>
                  {" "}
                  <Img
                    src="https://www.sephora.com/img/ufe/icons/opt-out.svg"
                    w={"100%"}
                  />
                </Box>
              </Flex>
            </Flex>
            <Flex gap={"10px"}>
              <Text>1-877-737-4672 </Text>
              <Text>TTY: 1-888-866-9845 </Text>
            </Flex>
          </SimpleGrid>

          <Divider display={["block", "block", "block", "none"]} />

          <Flex
            justifyContent={["center", "center", "center", "end"]}
            gap={"12px"}
          >
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/instagram-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/facebook-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/twitter-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/youtube-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/pinterest-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/snapchat-ko.svg" />
            </Box>
            <Box>
              <Img src="https://www.sephora.com/img/ufe/icons/tiktok-ko.svg" />
            </Box>
          </Flex>
        </SimpleGrid>
      </SimpleGrid>
    </footer>
  );
};

export default Footer;
