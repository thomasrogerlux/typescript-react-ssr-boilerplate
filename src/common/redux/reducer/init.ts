import { Action } from "common/redux/action"
import { Store, initialState } from "common/redux/store"

export default function initReducer(state: Store = initialState, action: Action): Store {
    return state;
}
