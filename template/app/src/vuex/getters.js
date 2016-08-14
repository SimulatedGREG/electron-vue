{{#if_eq vueVersion 'next'}}
export const mainCounter = state => state.counters.main
{{else}}
export function mainCounter (state) {
  return state.counters.main
}
{{/if_eq}}
