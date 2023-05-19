import { Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <Box 
        bgColor={"blackAlpha.900"} 
        color={"white"} 
        minH={"40"} 
        px={"16"} 
        py={["16","8"]}
    >
        <Stack 
            direction={["column","row"]} 
            h={"full"} 
            alignItems={"center"}
        >
            <VStack 
                w="full" 
                alignItems={["center","flex-start"]} 
            >
                <Text fontWeight={"bold"}>About Us</Text>

                <Text 
                    fontSize={"sm"} 
                    letterSpacing={"widest"} 
                    textAlign={["center","left"]}
                >
                    We are the best tradding app in India, we provide our guidance at very cheap price
                </Text>

            </VStack>
          
        </Stack>
    </Box>
  )
}

export default Footer