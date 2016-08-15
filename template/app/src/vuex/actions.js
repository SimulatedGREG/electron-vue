import * as types from './mutation-types'

export const decrementMain = ({ {{#if_eq vueVersion 'next'}}commit{{else}}dispatch{{/if_eq}} }) => {
  {{#if_eq vueVersion 'next'}}commit{{else}}dispatch{{/if_eq}}(types.DECREAMENT_MAIN_COUNTER)
}

export const incrementMain = ({ {{#if_eq vueVersion 'next'}}commit{{else}}dispatch{{/if_eq}} }) => {
  {{#if_eq vueVersion 'next'}}commit{{else}}dispatch{{/if_eq}}(types.INCREAMENT_MAIN_COUNTER)
}
