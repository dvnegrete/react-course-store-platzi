import { useEffect, useState } from "react"
import { Card } from "../../Components/Card"
import { Layout } from "../../Components/Layout"
import { Product } from "../../interfaces/product.interface";
//import { ProductService } from "../../service/products.service";

export const Home = ()=> {
    const [ items, setItems ] = useState<Product[] | null>(null);
    
    useEffect( ()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then( res => res.json() )
        .then((data:Product[]) => {
            console.log(data)
            setItems(data)
        })
    }, []);

    return (
        <Layout>
            Home
            <div className="grid gap-3 grid-cols-2 w-full max-h-screen">
                {
                    items?.map(( product )=>{
                        return <Card key={ product.id } data={ product }/>
                    })
                }
            </div>
        </Layout>
)
}