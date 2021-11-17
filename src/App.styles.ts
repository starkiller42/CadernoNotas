import styled from 'styled-components';

export const Container = styled.div`
    background-color: #4682B4;
    color: #2F4F4F;
    min-height: 100%;
    display: grid;
    grid-template-columns: 100px 1fr 1fr 1fr 100px;
    grid-template-rows: 50px 1fr;
    grid-template-areas: 
        ". header header header ."
        ". sidebar main main .";
    column-gap: 10px;
    row-gap: 15px;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    grid-area: header;
    background-color: tomato;
    border-radius: 6px;
`;

export const Main = styled.div`
    grid-area: main;
    background-color: blue;
    border-radius: 6px;
`;

export const SideBar = styled.div`
    grid-area: sidebar;
    background-color: green;
    border-radius: 6px;
`;
