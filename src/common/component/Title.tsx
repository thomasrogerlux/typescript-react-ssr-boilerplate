import * as React from "react";
import styled from "styled-components";

interface TitleProps {
    children?: any;
}

export const Title = (props: TitleProps) => {
    return (
        <StyledTitle>
            {props.children}
        </StyledTitle>
    );
}

const StyledTitle = styled.h1`
    color: green;
    text-align: center;
    font-family: sans-serif;
`;
