import * as React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
    onClick: any;
    children: string;
    primary?: boolean;
}

interface StyledButtonProps {
    primary: boolean;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton primary={props.primary} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    );
}

const StyledButton = styled.button`
    background-color: transparent;
    border: 2px solid red;
    color: black;
    text-align: center;
    font-size: 16px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    padding: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        color: white;
        background-color: red;
    }

    &:active {
        background-color: orange;
        border: 2px solid orange;
    }

    ${(props: StyledButtonProps) => props.primary && css`
        border: 2px solid green;

        &:hover {
            background-color: green;
        }
    
        &:active {
            background-color: blue;
            border: 2px solid blue;
        }
    `};
`;
