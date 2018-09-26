import * as React from "react";

import { Title } from "common/component/Title";
import { Button } from "common/component/Button";
import { LinkButton } from "common/component/LinkButton";

export default class Test extends React.Component {
    public render() {
        return (
            <div className="Test">
                <Title>
                    This is the test container
                </Title>
                <Title>
                    Yes it is
                </Title>
                <Button primary>
                    Here is a useless primary button
                </Button>
                <LinkButton to="/">
                    Go back
                </LinkButton>
            </div>
        );
    }
}
