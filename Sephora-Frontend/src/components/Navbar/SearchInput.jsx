import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, List, ListItem, IconButton, Flex } from "@chakra-ui/react";
import { FaTimes, FaSearch } from "react-icons/fa";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [cross, setCross] = useState(false);
  const debouncedInputValue = useDebounce(searchTerm, 500);
  const [data, setData] = useState([]);
  const handleNavigation = useNavigate();

  const fetchingSearchedData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product?search=${searchTerm}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchNavigation = (id) => {
    handleNavigation(`/products/${id}`);
    setIsTrue(false);
    setCross(true);
  };

  useEffect(() => {
    if (debouncedInputValue && searchTerm?.length) {
      fetchingSearchedData();
    }

    if (searchTerm === "") {
      setIsTrue(false);
    }
  }, [debouncedInputValue]);

  return (
    <Box>
      <Flex
        bg="white"
        w="full"
        p={1}
        alignItems="center"
        rounded="3xl"
        className="double-width"
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsTrue(true);
            setCross(true);
          }}
          placeholder="Search"
          fontWeight={550}
          borderRadius={"20px"}
        />
      </Flex>

      {data.length && isTrue ? (
        <List
          zIndex={10}
          position="absolute"
          w={["80%", "600px"]}
          maxH="80"
          rounded="3xl"
          ml={5}
          bg="white"
          overflow="auto"
          mt={2}
        >
          {data?.length ? (
            data?.map((result) => (
              <ListItem
                p={2}
                borderBottom="1px"
                borderColor="gray.200"
                display="flex"
                justifyContent="space-between"
                color="black"
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
                key={result._id}
                onClick={() => handleSearchNavigation(result._id)}
              >
                {result.title}
              </ListItem>
            ))
          ) : (
            <ListItem>No Data Found</ListItem>
          )}
        </List>
      ) : (
        isTrue && (
          <Box
            zIndex={10}
            position="absolute"
            w="700px"
            maxH="80"
            rounded="3xl"
            ml={5}
            color="black"
            p={5}
            bg="white"
            overflow="auto"
            mt={2}
          >
            No Data Found
          </Box>
        )
      )}
    </Box>
  );
}

export default SearchInput;
