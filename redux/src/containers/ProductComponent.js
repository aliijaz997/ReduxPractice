import React from "react";
import { useSelector } from "react-redux";
import "..//App.css"
import { Link } from "react-router-dom"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image,category ,price} = product;
            return(
                <div className="box" key={id}>
                <Link to = {`/product${id}`}>
                <div className="ui link card">
                    <div className="card"></div>
                    <div className="image"><img src={image} alt= {title}/></div>
                    <div className="content">
                        <div className="header"> {title} </div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
    
                </div>
                </Link>
            </div>
            )
    })
    return(
        <>
        {renderList};
        </>
    )
}

export default ProductComponent;