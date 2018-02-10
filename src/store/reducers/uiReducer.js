const initialState = {
    drawerIsOpen: false,
}

const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                drawerIsOpen: !state.drawerIsOpen,
            }
        default:
            return state
    }
}

export default uiReducer;