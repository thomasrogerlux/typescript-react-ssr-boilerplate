import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffd54f",
            light: "#ffff81",
            dark: "#c8a415",
            contrastText: "#212121"
        },
        secondary: {
            main: "#7986cb",
            light: "#aab6fe",
            dark: "#49599a",
            contrastText: "#fafafa"
        },
        type: "light"
    }
});

export default theme;
