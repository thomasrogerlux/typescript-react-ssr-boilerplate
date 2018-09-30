import * as React from "react";
import { withStyles } from "@material-ui/core";
import * as Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import style from "./NavLinkButton.style";

interface NavLinkButtonProps extends Button.ButtonProps {
    classes: any;
    children: any;
    to: string;
}

class NavLinkButton extends React.Component<NavLinkButtonProps> {
    constructor(props: NavLinkButtonProps) {
        super(props);
    }

    public render() {
        const { classes, children, to, ...props } = this.props;

        return (
            <React.Fragment>
                <NavLink to={to} className={classes.navLink}>
                    <Button.default className={classes.button} {...props}>
                        {children}
                    </Button.default>
                </NavLink>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(NavLinkButton);
