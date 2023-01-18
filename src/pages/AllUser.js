import React,{useEffect, useState} from "react";
import User from "./User";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import "../App.css";


const AllUsers=()=>{

    useEffect(()=>{
        document.title="All User || Learn with Trupti";
    },[]);


     //function to call servers
     const getAllUsersFromServer=()=>{
        axios.get(`${base_url}/users`).then(
            (response)=>{
                //for success
                //consol.log("Success");
                console.log(response.data);
                toast.success("User has been loaded",{position:"bottom-center"});
                setusers(response.data);
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
        getAllUsersFromServer();
    },[]);

    const [users,setusers]=useState([]);

    const updateUsers=(id)=>{
        setusers(users.filter((c)=>c.id!==id));
    };

    // const [products, setproducts]=useState([
    //     {item:101, name:"Samsung Galaxy ", specification:"Black 256 GB, 6GB RAM"},
    //     {item:102, name:"IPhone", specification:"Silver 256 GB, 6 GB RAM"},
    //     {item:103, name:"Vivo", specification:"Mint Green 128 GB , 6 GB RAM"}

    // ])

    return (
        <div className="adduser">
            <h1>All Users</h1>
            <p>List Of Users as follows</p>
            {users.length>0
            ? users.map((item) => <User users={item} />)
            :"No User"};
        </div>
    );
};
export default AllUsers;