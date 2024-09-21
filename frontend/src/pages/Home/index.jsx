import { Card } from "../../components/Card";
import { ContainerHome, MainContainer } from "./style";
import { Sidebar } from "../../components/Sidebar";
import { useEffect, useState } from "react";
import Api from "../../components/axios/api";

export const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await Api.get(`/products`);
                
     
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        handleFetch();

      
    }, []);

    return (
        <ContainerHome>
            <MainContainer>
                <Card products={products} />
            </MainContainer>
            <Sidebar />
        </ContainerHome>
    );
};
