import serverAPI from '../apis/server'
import { FETCH_DATA } from './actionType'

function setData(payload) {
    return {
        type: FETCH_DATA,
        payload
    }
}

export function fetchData() {
    return async function (dispatch) {
        try {
            const { data } = await serverAPI({
                method: 'get'
            })
            dispatch(setData(data))
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
}