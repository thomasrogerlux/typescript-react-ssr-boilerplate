export interface Action {
    type: string,
    data: any
}

export const ChangeTitle = (newTitle: string): Action => ({
    type: "CHANGE_TITLE",
    data: newTitle
})
