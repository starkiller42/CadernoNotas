import styled from 'styled-components';

export const Container = styled.div`
    background: #99B2B7;
    color: #2F4F4F;
    min-height: 100%;
    display: grid;
    grid-template-columns: 5px 1fr 3fr 5px;
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
    color: #1C1C1C;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
    grid-area: header;
`;

export const Main = styled.div`
    grid-area: main;
    border-radius: 6px;
`;

export const SideBar = styled.div`
    grid-area: sidebar;
    border-right: 1px solid #444;
`;
