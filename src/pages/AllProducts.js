import React,{useEffect, useState} from "react";
import Products from "./Products";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import "../App.css";


const AllProducts=()=>{

    useEffect(()=>{
        document.title="All Courses || Learn with Trupti";
    },[]);


     //function to call servers
     const getAllProductsFromServer=()=>{
        axios.get(`${base_url}/products`).then(
            (response)=>{
                //for success
                //consol.log("Success");
                console.log(response.data);
                toast.success("Products has been loaded",{position:"bottom-center"});
                setproducts(response.data);
            },
            (error)=>{
                //for error
                console.log("Error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };


    //calling loading server function
    useEffect(()=>{
        getAllProductsFromServer();
    },[]);

    const [products,setproducts]=useState([]);

    const updateProducts=(id)=>{
        setproducts(products.filter((c)=>c.id!==id));
    };

    // const [products, setproducts]=useState([
    //     {item:101, name:"Samsung Galaxy ", specification:"Black 256 GB, 6GB RAM"},
    //     {item:102, name:"IPhone", specification:"Silver 256 GB, 6 GB RAM"},
    //     {item:103, name:"Vivo", specification:"Mint Green 128 GB , 6 GB RAM"}

    // ])

    return (
        <div className="adduser">
            <h1>All Products</h1>
            <p>List Of Products as follows</p>
            {products.length>0
            ? products.map((item) => <Products products={item} />)
            :"No Products"};
        </div>
    );
};
export default AllProducts;