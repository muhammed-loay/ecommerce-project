import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

function Productdetails() {
    const api_url = "https://fakestoreapi.com/products";
    const [product, setProduct] = useState({}); 
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`${api_url}/${params.productid}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [params.productid]); 

    return (
        <>
        <Product product={product} showButton={true}/>

        </>
         
    );
}

export default Productdetails;
