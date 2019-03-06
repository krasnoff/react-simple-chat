import { ADD_CHAT, APP_ERROR } from "../constants/action-types";

const initialState = {
    chats: [],
    error: null
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_CHAT) {
        action.payload.id = state.chats.length + 1;
        
        return Object.assign({}, state, {
            chats: state.chats.concat(action.payload),
            error: null
        });
    }
    else if (action.type === APP_ERROR) {
        return Object.assign({}, state, {
            error: APP_ERROR
        });
    }
    
    return state;
};

export default rootReducer;