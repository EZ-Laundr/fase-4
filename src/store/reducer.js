import { FETCH_DATA } from './actionType'

const intialState = {
    items: []
}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}