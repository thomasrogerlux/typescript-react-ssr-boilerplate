import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Grid,
    Toolbar,
    withStyles
} from "@material-ui/core";

import NavLinkButton from "common/components/NavLinkButton/NavLinkButton.component";
import style from "./AppBar.style";

interface AppBarProps {
    classes: any;
}

class AppBar extends React.Component<AppBarProps> {
    constructor(props: AppBarProps) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <BaseAppBar position="static">
                    <Toolbar>
                        <Grid container className={classes.gridContainer}>
                            <Grid
                                item
                                xs
                                className={classes.menuButtonContainer}
                            >
                                <NavLinkButton
                                    className={classes.menuButton}
                                    color="secondary"
                                    variant="contained"
                                    to="/"
                                >
                                    Home page
                                </NavLinkButton>
                            </Grid>
                            <Grid
                                item
                                container
                                xs
                                className={classes.titleContainer}
                            >
                                <Typography
                                    variant="title"
                                    className={classes.title}
                                >
                                    Hello World!
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                xs
                                className={classes.loginButtonContainer}
                            >
                                <NavLinkButton
                                    className={classes.loginButton}
                                    color="secondary"
                                    variant="contained"
                                    to="/test"
                                >
                                    Test page
                                </NavLinkButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </BaseAppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(AppBar);
