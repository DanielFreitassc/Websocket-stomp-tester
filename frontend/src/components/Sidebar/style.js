import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
    width: 104px;
    height: 100vh;
`;

export const ContainerSidebar = styled.div`
    background-color: #1f1d2b;
    height: 100vh;
    width: 100px;
    border-radius: 16px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`;

export const ContainerNav = styled.nav`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 16px;
`
export const LinkTo = styled(Link)`
    font-size: 6.0rem;
`