module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  {{#if_eq eslintConfig 'standard'}}
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq eslintConfig 'airbnb'}}
  extends: 'airbnb-base',
  {{/if_eq}}
  plugins: [
    'html'
  ],
  'rules': {
    {{#if_eq eslintConfig 'standard'}}
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    {{/if_eq}}
    {{#if_eq eslintConfig 'airbnb'}}
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
