import {EXPAND_ITEM, CHANGE_FILTER} from '../constants/Price'

export function expandItem(key, isHide) {
    return {
        type: EXPAND_ITEM,
        payload: (isHide)? key : null
    }
}
export function changeFilter(keyword) {
    return {
        type: CHANGE_FILTER,
        payload: keyword
    }
}
