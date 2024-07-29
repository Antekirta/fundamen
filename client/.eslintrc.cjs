module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    'vue/no-multiple-template-root': ['off'],
    'vue/multi-word-component-names': ['off']
  }
}
