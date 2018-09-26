import * as React from "react";
import { Redirect } from "react-router";

import { Button } from "common/component/Button";

interface LinkButtonProps {
    to: string;
    children?: any;
    primary?: boolean;
}

interface LinkButtonState {
    redirect: boolean;
}

export class LinkButton extends React.Component<LinkButtonProps, LinkButtonState> {
    constructor(props: LinkButtonProps) {
        super(props);

        this.state = {
            redirect: false
        };

        this.handleOnClick= this.handleOnClick.bind(this);
    }

    public handleOnClick() {
        this.setState({
            redirect: true
        });
    }

    public render() {
        if (this.state.redirect) {
            return (
                <Redirect push to={this.props.to} />
            );
        }

        return (
            <Button primary={this.props.primary} onClick={this.handleOnClick}>
                {this.props.children}
            </Button>
        );
    }
}
