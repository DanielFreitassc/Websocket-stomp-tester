import { useEffect, useState } from "react";
import { TableOrder } from "../../components/Table";
import Api from "../../components/axios/api";
import { ContainerOrder, ContanetOrder } from "./style";
import { Sidebar } from "../../components/Sidebar";

export const Order = () => {
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        const handleFetch = async () => {
            try {
                const response = await Api.get("/orders")

                setOrders(response.data)
            } catch (error) {
                console.log(error)
            }
        };
        handleFetch();
    },[]);


    return (
        <ContainerOrder>
                <Sidebar/>
                <ContanetOrder>
                    <TableOrder items={orders} />
                </ContanetOrder>
        </ContainerOrder>
    );
}