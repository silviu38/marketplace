import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNavigation = styled.div `
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: sticky;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    z-index: 10;
`;

export const HeaderGroup = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLink = styled(Link) `
    text-decoration: none;
    background-color:  ${(props) => props.active ? '#2185d0' : '#1b1c1d'};
    padding: 10px;
    border-radius: 5px;
    color: white;
    margin-left: 10px;
    ${(props) => props.active && 
    'color: yellow; border-bottom: 2px solid black;'}
`;
