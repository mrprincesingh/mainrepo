import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';

const Cart = ({ cart, onRemove }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      p="4"
      m="4"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
    >
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Your Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty!</Text>
      ) : (
        <Box w="full">
          {cart.map((item, index) => (
            <Box
              key={index}
              borderBottom="1px solid gray"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py="2"
             gap="20px"
            >
              <Text>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </Text>
              <Button
                onClick={() => onRemove(index)}
                size="sm"
                colorScheme="red"
              >
                Remove
              </Button>
            </Box>
          ))}
        </Box>
      )}
      {cart.length > 0 && (
        <Text fontWeight="bold" mt="4">
          Total: ${totalPrice.toFixed(2)}
        </Text>
      )}
    </Box>
  );
};

export default Cart;
