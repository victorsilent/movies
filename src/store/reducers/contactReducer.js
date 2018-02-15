const initialState = {
    contacts: [],
}

const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CONTACT':
            return {
                contacts: [...state.contacts, action.payload.contact]
            }
        case 'FETCH_USERS':
            return {
                contacts: [...action.payload.contacts]
            }
        default:
            return state
    }
}

export default uiReducer;