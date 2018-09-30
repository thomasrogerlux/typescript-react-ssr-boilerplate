import * as React from "react";
import { Typography } from "@material-ui/core";

interface TestProps {
}

class Test extends React.Component<TestProps> {
    constructor(props: TestProps) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Typography>
                    Test page
                </Typography>
            </React.Fragment>
        );
    }
}

export default Test;
