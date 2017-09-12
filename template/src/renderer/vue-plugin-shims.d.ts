import Vue from 'vue'

// attachment of vue plugins
declare module 'vue/types/vue' {
  interface Vue {
    $http?: any
    $electron?: any
  }

  namespace Vue {
    let http: any
  }
}
