import React, { useState } from 'react';
import { Container, Box, Heading } from '@chakra-ui/react';
import CryptoCard from './CryptoCard';
import Cart from './Cart ';


const cryptoData = [
  { name: 'Bitcoin', price: 40000 },
  { name: 'Ethereum', price: 2800 },
  { name: 'Litecoin', price: 1000 },
];

function CryptoStore() {
  const [cart, setCart] = useState([]);

  const handleBuy = (crypto) => {
    setCart([...cart, crypto]);
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <Container   centerContent>
      <Heading as="h1" size="xl" mb={4}>
        Crypto Store
      </Heading>
      <Box display="flex" spacing={4} alignItems="stretch" width="100%">
        {cryptoData.map((crypto, index) => (
          <CryptoCard key={index} crypto={crypto} onBuy={handleBuy} />
        ))}
      </Box>
      <Cart cart={cart} onRemove={handleRemove} />
    </Container>
  );
}

export default CryptoStore;
