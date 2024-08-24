import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
`
export const CardMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 16px;
    background: #1f1d2b;
    text-align: center;
    border-radius: 16px;
    height: 240px;
    width: 192px;
    gap: 10px;
    color: white;
`
export const NameContainer = styled.h1`
    font-size: 1.6rem;
    margin-top: 6px;
`
export const PriceContainer = styled.p`
    font-size: 1.3rem;
    color: white;
    `
export const AvailableContainer = styled.p`
    font-size: 1.2rem;
    color: #abbbc2;
    `
export const ImgContainer = styled.img`
    object-fit: contain;
    width: 130px;
    margin-top: -90px;
`
