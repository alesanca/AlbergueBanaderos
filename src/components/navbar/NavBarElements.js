import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
background: white;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`;

export const NavLink = styled(Link)`
    color: black;   
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1 rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        color#15cdfc;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
`;