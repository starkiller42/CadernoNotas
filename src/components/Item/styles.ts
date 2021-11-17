import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 10px;
    width: 100%;
    min-height: 100vh;

    input {
        padding: 5px;
        width: 200px;
        height: 15px;
        margin-bottom: 20px;
    }

    textarea {
        width: 500px;
        height: 500px;
        font-size: 16px;
        
    }
`;
