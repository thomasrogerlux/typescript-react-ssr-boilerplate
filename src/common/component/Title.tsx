import * as React from "react";

interface TitleProps {
    title: string;
}

export const Title = (props: TitleProps) => {
    return (
        <h1>{props.title}</h1>
    );
}
