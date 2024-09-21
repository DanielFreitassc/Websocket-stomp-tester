import { AvailableContainer, CardContainer, CardMap, ImgContainer, NameContainer, PriceContainer } from "./style"

export const Card = ({products = []}) => {
    return(
        
        <CardContainer>
            {products.map((prod) => (
                <CardMap key={prod.id}>
                    <ImgContainer src={prod.img}/>
                    <NameContainer>{prod.name}</NameContainer>
                    <PriceContainer>{prod.price}</PriceContainer>
                    <AvailableContainer>{prod.available}</AvailableContainer>
                </CardMap>
            ))}
        </CardContainer>
    )
}