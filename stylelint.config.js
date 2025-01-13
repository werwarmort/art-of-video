module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$', // разрешить camelCase для модульных стилей
    'media-query-no-invalid': false, // Отключить стандартное правило для проверки медиазапросов
    'scss/media-query-no-missing-interpolation': false, // Проверка SCSS-медиазапросов
    'order/properties-order': [
      'content',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'flex-direction',
      'position',
      'top',
      'left',
      'width',
      'height',
      'margin',
      'margin-bottom',
      'margin-top',
      'margin-left',
      'margin-right',
      'padding',
      'padding-bottom',
      'padding-top',
      'padding-left',
      'padding-right',
      'font-size',
      'letter-spacing',
      'text-align',
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
