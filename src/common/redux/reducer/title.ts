import { Action } from "common/redux/action"
import { Store } from "common/redux/store"

const initialState: Store = {
    title: "Hello World!"
};

export function changeTitle(state: Store = initialState, action: Action): Store {
    switch (action.type) {
        case "CHANGE_TITLE": {
            return {
                title: action.data
            };
        }
    }

    return state;
}
