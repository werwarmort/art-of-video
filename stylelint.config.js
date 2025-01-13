module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // разрешить camelCase для модульных стилей
    'order/properties-order': [
      'z-index',
      'position',
      'top',
      'left',
      'width',
      'height',
      'font-size',
      'background',
      'background-color',
      'color',
      'object-fit',
    ],
  },
  overrides: [
    {
      files: ['**/*.module.scss'], // настройки для модульных файлов
      customSyntax: 'postcss-scss',
    },
  ],
};
