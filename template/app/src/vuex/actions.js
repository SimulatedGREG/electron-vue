import * as types from './mutation-types'

export const decrementMain = ({ dispatch }) => {
  dispatch(types.DECREMENT_MAIN_COUNTER)
}

export const incrementMain = ({ dispatch }) => {
  dispatch(types.INCREMENT_MAIN_COUNTER)
}
