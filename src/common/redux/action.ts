export interface Action {
    type: string;
    data: any;
}

export const changeTitle = (newTitle: string): Action => ({
    type: "CHANGE_TITLE",
    data: newTitle
});
