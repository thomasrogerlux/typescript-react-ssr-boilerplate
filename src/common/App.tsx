import * as React from "react";
import { connect } from "react-redux";

import { Store } from "common/redux/store"
import { Title } from "common/component/Title"
import { changeTitle } from "common/redux/action"

interface AppProps {
    title: string;
    updateTitle: any;
}

class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
        this.test= this.test.bind(this);
    }

    public test() {
        const newTitle = this.props.title + "x";
        this.props.updateTitle(newTitle);
        console.log("Hello");
    }

    public render() {
        return (
            <div className="App">
                <Title title={this.props.title} />
                <button onClick={this.test}>
                    Change Title
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: Store) => {
    return {
        title: state.title
    }
}

const mapDispatchToProps = {
    updateTitle: changeTitle
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
