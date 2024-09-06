import {
  Box,
  Button,
  Flex,
  Img,
  Select,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IS_LOADING, NO_LOADING, ERROR } from "../Redux/Loading/actionTypes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.loading);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      dispatch({ type: IS_LOADING });

      const resp = await axios.get(
        `${import.meta.env.VITE_API_URL}/product?category=${category}`
      );
      console.log(resp.data);
      setData(resp.data.data);
      setSortedData(resp.data.data);

      dispatch({ type: NO_LOADING });
    } catch (error) {
      console.log("Error in Fetching");
      dispatch({ type: ERROR });
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "ltoh") {
      const sorted = [...data].sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
      setSortedData(sorted);
    } else if (value === "htol") {
      const sorted = [...data].sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
      setSortedData(sorted);
    }
  };

  return (
    <Box>
      <Navbar />

      <Text fontWeight={700} fontSize={"24px"} p={[5, 5, 10, 10]}>
        Products
      </Text>

      <SimpleGrid gridTemplateColumns={["1fr", "1fr", "1fr 2fr", ".7fr 3fr"]}>
        <SimpleGrid mb={5} p={10} alignContent={"start"}>
          <Text
            fontSize={"12px"}
            fontWeight={400}
            color={"rgb(102, 102, 102)"}
            mb={"20px"}
          >
            Filters
          </Text>
          <Select
            variant="outline"
            placeholder="Choose"
            outline={"1px solid rgba(0,0,0,0.4)"}
            borderRadius={"none"}
            cursor={"pointer"}
            onChange={handleChange}
          >
            <option value="ltoh">Price: Low To High</option>
            <option value="htol">Price: High To Low</option>
          </Select>

          <Box
            m={"auto"}
            mt={"20px"}
            display={["none", "none", "block", "block"]}
          >
            <Img src="https://prodeastusmappscreative.azureedge.net/prmt/9bcdeea58492fdde5866969beb04bbf4" />
          </Box>
        </SimpleGrid>

        {loading ? (
          <Flex justifyContent="center" alignItems="center" minH="20vh">
            <Img
              src="https://www.sephora.com/img/ufe/loader.gif"
              alt={<Spinner />}
            />
          </Flex>
        ) : (
          <SimpleGrid
            gridTemplateColumns={[
              "repeat(2,1fr)",
              "repeat(2,1fr)",
              "repeat(3,1fr)",
              "repeat(4,1fr)",
            ]}
            p={[5, 5, 8, 20]}
            pt={[2, 2, 2, 2]}
            gap={12}
            alignItems={"end"}
          >
            {(sortedData.length ? sortedData : data)?.map((elem) => (
              <SimpleGrid cursor={"pointer"} key={elem._id}>
                <Box>
                  <Img src={elem.images[0]} alt="Image" />
                </Box>
                <Text mt={8} fontWeight={700} fontSize={"12px"}>
                  {elem.title}
                </Text>
                <Text
                  mb={2}
                  fontWeight={400}
                  fontSize={["13px", "13px", "14px", "14px"]}
                  _hover={{ textDecoration: "underline" }}
                  overflow={"hidden"}
                  h={"40px"}
                  onClick={() => handleClick(elem._id)}
                >
                  {elem.description}
                </Text>
                <Text fontWeight={700} fontSize={"16px"}>
                  ${elem.price}
                </Text>
                <Button
                  _hover={{ color: "white" }}
                  mt={"12px"}
                  bgColor={"black"}
                  color={"white"}
                  onClick={() => handleClick(elem._id)}
                >
                  Add
                </Button>
              </SimpleGrid>
            ))}
          </SimpleGrid>
        )}
      </SimpleGrid>

      <Footer />
    </Box>
  );
};

export default Products;
