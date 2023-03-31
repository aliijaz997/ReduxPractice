import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectedProducts} from "../redux/actions/productActions";

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {id, title, image,category ,price} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    
    const fetchProductDetail =  async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) =>{
            console.log("Err",err);
        });
        dispatch(selectedProducts(response.data));
    };
    useEffect(()=>{
            fetchProductDetail();
    },[productId])
    console.log(productId);
    return(
        <div>
             <div className="ui link card" key={id}>
                    <div className="card"></div>
                    <div className="image"><img src={image} alt= {title}/></div>
                    <div className="content">
                        <div className="header"> {title} </div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
    
                </div>
        </div>
    )
}

export default ProductDetails;