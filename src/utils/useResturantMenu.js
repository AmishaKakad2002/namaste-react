import { useState, useEffect } from "react";
import {MENU_URL} from "./constants";
const useRestaurantMenu = (resId) =>{
    const [resInfo,useResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async() =>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        useResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;