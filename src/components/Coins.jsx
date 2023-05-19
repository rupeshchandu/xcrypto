import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {server} from "../index";
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {

  const [coins,setcoins] = useState([]);
  const [loading,setloading] = useState(true);
  const [error,seterror] = useState(false);
  const[page,setpage] = useState(1);
  const[currency,setcurrency] = useState("eur");
  const currencysymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const changepage = (page) => {
    setpage(page);
    setloading(true);
  };

  const btns = new Array(108).fill(1);



  useEffect(()=>{

    const fetchcoins = async() =>{

        try {
            const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
            setcoins(data);
            setloading(false);
            console.log(data);
        } catch (error) {
            seterror(true);
            setloading(false);
        }

    };
    fetchcoins();

  },[currency,page]);

  if(error) return <ErrorComponent message = "Error While Fetching Coins" />;

  return (
    <Container maxW={"container.xl"}> {loading ? <Loader/>:
    <>

    <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
        <HStack spacing={"4"}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
        </HStack>
    </RadioGroup>

    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
        {
            coins.map((i)=>(
                <CoinCard 
                    id = {i.id}
                    key={i.id}
                    name = {i.name} 
                    symbol = {i.symbol}
                    price = {i.current_price}
                    img = {i.image} 
                    currencysymbol= {currencysymbol}
                    
                />
            ))
        }
    </HStack>
    
    <HStack w = {"full"}  overflowX={"auto"} p={"8"}>
        {
            btns.map((item,index)=>(
                <Button 
                    key = {index} 
                    bgColor={"blackAlpha.900"} 
                    color={"white"} 
                    onClick={()=> changepage(index+1)} 
                >
                    {index+1}
                </Button>
            ))
        }
    </HStack>
    </>
    }
    </Container>
  )
}



export default Coins