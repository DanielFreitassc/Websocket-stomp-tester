import { Card } from "../../components/Card"
import { ContainerHome } from "./style"
import img from "../../assets/rango.png"
import { Sidebar } from "../../components/Sidebar"
export const Home = () => {
    const products = [
        {id:1, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:2, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:3, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:4, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:5, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:6, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:7, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:8, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:9, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:10, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:11, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:12, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:13, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:14, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:15, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:16, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:17, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:18, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:19, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:20, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:21, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:22, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:23, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"},
        {id:24, img:img,name:"Spicy seasoned seafood noodles",price:"$ 2.29",available:"20 Bowls available"}


    ]
    return(
        <ContainerHome>
            <Sidebar/>
            <Card products={products}/>
        </ContainerHome>
    )
}