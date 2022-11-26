import React, { useEffect,useState } from "react";
import axios from "axios";
import "./styles.css";
import {TbBulbOff,TbBulb } from "react-icons/tb"

export default function App() {
  const [bulbState,setBulbState] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect( ()=>{
    const getData =async ()=>{
    const bulbState =await axios.get("http://192.168.101.20/getBulbStatus");
    setBulbState(bulbState.data);
    setIsLoading(false);
    }
    getData();
  },[])
  
  return (isLoading?"Loading...":
    bulbState =="1"
  ?<TbBulb size="100" />:<TbBulbOff size="100" />
  );
}
