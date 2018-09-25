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
    titleList: string[] = [
        "Hello World!",
        "High five from React",
        "Wow. Much skills."
    ];

    constructor(props: AppProps) {
        super(props);

        this.setRandomTitle= this.setRandomTitle.bind(this);
    }

    public setRandomTitle() {
        let titleIndex = this.titleList.indexOf(this.props.title) + 1;
        if (titleIndex >= this.titleList.length) {
            titleIndex = 0;
        }

        const newTitle = this.titleList[titleIndex];
        this.props.updateTitle(newTitle);
    }

    public render() {
        return (
            <div className="App">
                <Title title={this.props.title} />
                <button onClick={this.setRandomTitle}>
                    Update
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
