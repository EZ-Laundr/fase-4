import { FETCH_DATA } from './actionType'

const intialState = {
    data: []
}

export default function reducer(state = intialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}