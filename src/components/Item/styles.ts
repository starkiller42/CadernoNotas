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
        font-size: 16px;
        font-size: max(16px, 1em);
        font-family: inherit;
        padding: 0.25em 0.5em;
        background-color: #D5DED9;
        border: 2px solid var(--input-border);
        border-radius: 4px;
    }

    textarea {
        width: 500px;
        height: 500px;
        font-size: 16px;
        background-color: #D5DED9;
    }
`;
