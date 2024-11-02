import { useEffect, useState } from "react";
import Product from "./product";
function ProductsList (){
    const api_url = "https://fakestoreapi.com/products"; 
    const [products, setproducts] = useState([]); 
    const [categories, setcategories] = useState([]); 

    const getproduct = () =>{
        fetch(api_url)
        .then(res => res.json())
        .then(data => setproducts(data));

    }
    const getcategories = () => {
        fetch(`${api_url}/categories`)
        .then(res => res.json())
        .then(data => setcategories(data));

    }
    const getcategoryname = (category) => {
        fetch(`${api_url}/category/${category}`)
       .then(res => res.json())
       .then(data => setproducts(data));
    }

    useEffect(() => {
        getproduct();
        getcategories(); 
    }, []);

  
    return(
        <>
        <h2 className= "text-center p-3">Our Products</h2>
        <div className="container">
            <div className="row">
            <button
                    onClick={() => getproduct()}
                    className="col-2 btn btn-info">
                        All Products
                    </button>

            {
                    categories.map((categorie)=>{
                        return(
                    <button
                    onClick={() => getcategoryname(categorie)}
                    key={categorie}
                    className="col-2 btn btn-info">
                        {categorie}
                    </button>)})
                }

                {products.map((product)=>{
                return(
                    <>
                    <div className="col-3" key={product.id}>
                        <Product product={product}/> 
                    </div>
                    
                    </>
                )}
                )} 

             </div>
            </div>

        </>
    )
} 
export default ProductsList ;
