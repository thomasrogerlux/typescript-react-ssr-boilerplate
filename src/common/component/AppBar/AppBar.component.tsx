import * as React from "react";
import {
    AppBar as BaseAppBar,
    Typography,
    Button,
    Grid,
    Toolbar,
    withStyles
} from "@material-ui/core";

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
                <BaseAppBar>
                    <Toolbar>
                        <Grid container className={classes.gridContainer}>
                            <Grid
                                item
                                xs
                                className={classes.menuButtonContainer}
                            >
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    className={classes.menuButton}
                                >
                                    Menu
                                </Button>
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
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    className={classes.loginButton}
                                >
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </BaseAppBar>
            </React.Fragment>
        );
    }
}

export default withStyles(style)(AppBar);
