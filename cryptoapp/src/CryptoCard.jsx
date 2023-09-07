import React, { useState } from 'react';
import { Box, Button, Text, Flex, IconButton } from '@chakra-ui/react';
import { MdAdd, MdRemove } from 'react-icons/md'; // You can import icons from a library

const CryptoCard = ({ crypto, onBuy }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuy = () => {
    if (quantity > 0) {
      onBuy({ ...crypto, quantity });
      setQuantity(0);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      m="4"
      border="2px solid gray"
      boxShadow="md"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
    >
      <Text fontSize="xl" fontWeight="bold" mb="3">
        {crypto.name}
      </Text>
      <Text fontSize="lg" color="gray.500" mb="2">
        Price: ${crypto.price}
      </Text>
      <Flex alignItems="center">
        <IconButton
          icon={<MdRemove />}
          onClick={handleDecrease}
          colorScheme="red"
          size="sm"
          isDisabled={quantity === 0}
        />
        <Text fontSize="lg" fontWeight="bold" mx="2">
          {quantity}
        </Text>
        <IconButton
          icon={<MdAdd />}
          onClick={handleIncrease}
          colorScheme="green"
          size="sm"
        />
      </Flex>
      <Button
        onClick={handleBuy}
        colorScheme="blue"
        _hover={{ bg: 'blue.600' }}
        _active={{ bg: 'blue.700' }}
        size="sm"
        mt="3"
        isDisabled={quantity === 0}
      >
        Buy
      </Button>
    </Box>
  );
};

export default CryptoCard;
