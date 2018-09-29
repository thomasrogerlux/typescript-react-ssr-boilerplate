import { Action } from "common/redux/action";
import { Store, initialState } from "common/redux/store";

export function changeTitle(
    state: Store = initialState,
    action: Action
): Store {
    switch (action.type) {
        case "CHANGE_TITLE": {
            return {
                title: action.data
            };
		}
		default: {
			return state;
		}
    }
}
