const rules = {
  // 'array-bracket-newline': [ 2, { minItems: 3, multiline: true }],
  'array-bracket-newline': [ 2, 'consistent' ],
  'array-bracket-spacing': [
    2,
    'always',
    {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: true,
    },
  ],
  'array-callback-return': [ 2 ],
  // 'array-element-newline': [ 2, { minItems: 3, multiline: true }],
  'array-element-newline': [ 2, 'consistent'],
  'arrow-body-style': [ 2, 'as-needed' ],
  'arrow-parens': [ 2, 'always' ],
  'arrow-spacing': [ 2, { after: true, before: true }],
  'block-spacing': [ 2 ],
  'brace-style': [
    2,
    '1tbs',
    { allowSingleLine: true },
  ],
  camelcase: [ 2 ],
  'comma-dangle': [ 2, 'always-multiline' ],
  'comma-spacing': [ 2, { after: true, before: false }],
  'comma-style': [ 2, 'last' ],
  'computed-property-spacing': [ 2, 'always' ],
  'constructor-super': [ 2 ],
  curly: [ 2, 'all' ],
  'default-case': [ 2 ],
  'default-case-last': [ 2 ],
  'default-param-last': [ 2 ],
  'dot-location': [ 2, 'property' ],
  'dot-notation': [ 2 ],
  'eol-last': [ 1, 'always' ],
  eqeqeq: [ 2 ],
  'func-call-spacing': [ 2, 'never' ],
  'func-style': [ 2, 'expression' ],
  // 'function-paren-newline': [ 2, { minItems: 3 }],
  'function-paren-newline': [ 2, 'consistent' ],
  'generator-star-spacing': [ 2, { after: true, before: false }],
  indent: [
    2,
    2,
    {
      SwitchCase: 1,
      flatTernaryExpressions: true,
      ignoreComments: true,
      offsetTernaryExpressions: false,
    },
  ],
  'jsx-quotes': [ 2, 'prefer-double' ],
  'key-spacing': [ 2 ],
  'keyword-spacing': [
    2,
    {
      overrides: {
        break: { after: false },
        continue: { after: false },
        debugger: { after: false },
        default: { after: false },
        delete: { after: false },
      },
    },
  ],
  'lines-between-class-members': [ 2, 'always' ],
  'max-len': [
    2,
    {
      code: 120,
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  'multiline-comment-style': [ 2, 'bare-block' ],
  'multiline-ternary': [ 2, 'always-multiline' ],
  'new-parens': [ 2, 'always' ],
  'newline-per-chained-call': [ 2 ],
  'no-case-declarations': [ 2 ],
  'no-class-assign': [ 2 ],
  'no-const-assign': [ 2 ],
  'no-dupe-args': [ 2 ],
  'no-dupe-class-members': [ 2 ],
  'no-dupe-else-if': [ 2 ],
  'no-dupe-keys': [ 2 ],
  'no-duplicate-case': [ 2 ],
  'no-duplicate-imports': [ 2 ],
  'no-else-return': [ 2, { allowElseIf: true }],
  'no-empty': [ 2 ],
  'no-empty-character-class': [ 2 ],
  'no-empty-pattern': [ 2 ],
  'no-ex-assign': [ 2 ],
  'no-extra-boolean-cast': [ 2, { enforceForLogicalOperands: true }],
  'no-extra-label': [ 2 ],
  'no-extra-semi': [ 2 ],
  'no-fallthrough': [ 2 ],
  'no-func-assign': [ 2 ],
  'no-global-assign': [ 2 ],
  'no-inner-declarations': [ 2 ],
  'no-mixed-spaces-and-tabs': [ 2 ],
  'no-multiple-empty-lines': [
    2,
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ],
  'no-multi-spaces': [ 2 ],
  'no-new-symbol': [ 2 ],
  'no-obj-calls': [ 2 ],
  'no-template-curly-in-string': [ 2 ],
  'no-this-before-super': [ 2 ],
  'no-trailing-spaces': [ 2 ],
  'no-undef': [ 2 ],
  'no-unexpected-multiline': [ 2 ],
  'no-unneeded-ternary': [ 2, { defaultAssignment: false }],
  'no-unreachable': [ 2 ],
  'no-unsafe-finally': [ 2 ],
  'no-unsafe-negation': [ 2 ],
  'no-unused-expressions': [ 2 ],
  'no-unused-labels': [ 2 ],
  'no-unused-vars': [ 1 ],
  'no-useless-computed-key': [ 2 ],
  'no-useless-constructor': [ 2 ],
  'no-useless-rename': [ 2 ],
  'no-useless-return': [ 2 ],
  'no-var': [ 2 ],
  'no-whitespace-before-property': [ 2 ],
  'nonblock-statement-body-position': [ 2, 'below' ],
  'object-curly-newline': [ 2, { minProperties: 3, multiline: true }],
  'object-curly-spacing': [
    2,
    'always',
    {
      arraysInObjects: false,
      objectsInObjects: false,
    },
  ],
  'object-property-newline': [ 2, { allowAllPropertiesOnSameLine: true }],
  'object-shorthand': [ 2, 'always' ],
  'operator-assignment': [ 2, 'always' ],
  'operator-linebreak': [ 2, 'before', { overrides: { '=': 'after' }}],
  'padding-line-between-statements': [
    2,
    {
      blankLine: 'always',
      next: 'return',
      prev: '*',
    },
    {
      blankLine: 'always',
      next: '*',
      prev: [
        'const',
        'let',
        'var',
      ],
    },
    {
      blankLine: 'any',
      next: [
        'const',
        'let',
        'var',
      ],
      prev: [
        'const',
        'let',
        'var',
      ],
    },
  ],
  'prefer-arrow-callback': [ 2 ],
  'prefer-const': [ 2, { destructuring: 'all', ignoreReadBeforeAssign: false }],
  'prefer-destructuring': [
    2,
    {
      array: true,
      object: true,
    },
    { enforceForRenamedProperties: false },
  ],
  'prefer-object-spread': [ 2 ],
  'prefer-rest-params': [ 2 ],
  'prefer-spread': [ 2 ],
  'prefer-template': [ 2 ],
  'quote-props': [ 2, 'as-needed' ],
  quotes: [ 2, 'single' ],
  'require-atomic-updates': [ 2 ],
  'require-yield': [ 2 ],
  'rest-spread-spacing': [ 2, 'never' ],
  semi: [ 2 ],
  'semi-spacing': [ 2, { after: false, before: false }],
  'semi-style': [ 2, 'last' ],
  /*'sort-keys': [
    2,
    'asc',
    {
      caseSensitive: true,
      minKeys: 2,
      natural: true,
    },
  ],*/
  'space-before-blocks': [ 2, 'always' ],
  'space-before-function-paren': [
    2,
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  'space-in-parens': [
    2,
    'always',
    {
      exceptions: [
        '{}',
        '[]',
        '()',
        'empty',
      ],
    },
  ],
  'space-infix-ops': [ 2 ],
  'space-unary-ops': [ 2, { nonwords: false, words: true }],
  'spaced-comment': [
    2,
    'always',
    {
      exceptions: [
        '+',
        '-',
        '*',
      ],
    },
  ],
  'switch-colon-spacing': [ 2, { after: true, before: false }],
  'symbol-description': [ 2 ],
  'template-curly-spacing': [ 2, 'always' ],
  'template-tag-spacing': [ 2, 'never' ],
  'use-isnan': [ 2 ],
  'valid-typeof': [ 2, { requireStringLiterals: true }],
  'yield-star-spacing': [ 2, 'after' ],
  'jsx-a11y/accessible-emoji': [ 2 ],
  'jsx-a11y/alt-text': [
    2,
    {
      area: [ 'Area' ],
      elements: [
        'img',
        'object',
        'area',
        'input[type="image"]',
      ],
      img: [ 'Image' ],
      'input[type="image"]': [ 'InputImage' ],
      object: [ 'Object' ],
    },
  ],
  'jsx-a11y/aria-props': [ 2 ],
  'jsx-a11y/aria-proptypes': [ 2 ],
  'jsx-a11y/aria-role': [ 2, { ignoreNonDOM: true }],
  'jsx-a11y/aria-unsupported-elements': [ 2 ],
  'jsx-a11y/click-events-have-key-events': [ 2 ],
  'jsx-a11y/heading-has-content': [ 2 ],
  'jsx-a11y/interactive-supports-focus': [ 2 ],
  'jsx-a11y/label-has-associated-control': [ 2 ],
  'jsx-a11y/media-has-caption': [ 2 ],
  'jsx-a11y/mouse-events-have-key-events': [ 2 ],
  'jsx-a11y/no-access-key': [ 2 ],
  'jsx-a11y/no-distracting-elements': [ 2 ],
  'jsx-a11y/no-interactive-element-to-noninteractive-role': [ 2, { tr: [ 'none', 'presentation' ]}],
  'jsx-a11y/no-noninteractive-element-interactions': [
    2,
    {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    },
  ],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': [
    2,
    {
      li: [
        'menuitem',
        'option',
        'row',
        'tab',
        'treeitem',
      ],
      ol: [
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'tablist',
        'tree',
        'treegrid',
      ],
      table: [ 'grid' ],
      td: [ 'gridcell' ],
      ul: [
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'tablist',
        'tree',
        'treegrid',
      ],
    },
  ],
  'jsx-a11y/no-noninteractive-tabindex': [ 2, { roles: [ 'tabpanel' ], tags: []}],
  'jsx-a11y/no-onchange': [ 2 ],
  'jsx-a11y/no-redundant-roles': [ 2, { nav: [ 'navigation' ]}],
  'jsx-a11y/no-static-element-interactions': [
    2,
    {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
    },
  ],
  'jsx-a11y/role-has-required-aria-props': [ 2 ],
  'jsx-a11y/role-supports-aria-props': [ 2 ],
  'react/button-has-type': [ 2 ],
  'react/default-props-match-prop-types': [ 2, { allowRequiredDefaults: true }],
  'react/destructuring-assignment': [
    2,
    'always',
    { ignoreClassFields: false },
  ],
  'react/forbid-component-props': [ 0 ],
  'react/forbid-prop-types': [
    2,
    {
      checkChildContextTypes: true,
      checkContextTypes: true,
      forbid: [
        'any',
        'array',
        'object',
      ],
    },
  ],
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/no-access-state-in-setstate': [ 2 ],
  'react/no-adjacent-inline-elements': [ 2 ],
  'react/no-array-index-key': [ 2 ],
  'react/no-children-prop': [ 2 ],
  'react/no-danger': [ 2 ],
  'react/no-danger-with-children': [ 2 ],
  'react/no-deprecated': [ 2 ],
  'react/no-did-mount-set-state': [ 2 ],
  'react/no-did-update-set-state': [ 2 ],
  'react/no-direct-mutation-state': [ 2 ],
  'react/no-find-dom-node': [ 2 ],
  'react/no-is-mounted': [ 2 ],
  'react/no-multi-comp': [ 2, { ignoreStateless: false }],
  'react/no-redundant-should-component-update': [ 2 ],
  'react/no-render-return-value': [ 2 ],
  'react/no-string-refs': [ 2, { noTemplateLiterals: true }],
  'react/no-this-in-sfc': [ 2 ],
  'react/no-unescaped-entities': [ 2 ],
  'react/no-unknown-property': [ 2 ],
  'react/no-unsafe': [ 2, { checkAliases: true }],
  'react/no-unused-prop-types': [ 1 ],
  'react/no-unused-state': [ 1 ],
  'react/no-will-update-set-state': [ 2 ],
  'react/prefer-es6-class': [ 2, 'always' ],
  'react/prefer-read-only-props': [ 2 ],
  'react/prefer-stateless-function': [ 2 ],
  'react/prop-types': [ 2 ],
  'react/react-in-jsx-scope': [ 0 ],
  'react/require-default-props': [ 2 ],
  'react/require-optimization': [ 2 ],
  'react/require-render-return': [ 2 ],
  'react/self-closing-comp': [ 2, { component: true, html: true }],
  'react/sort-prop-types': [
    2,
    {
      callbacksLast: true,
      ignoreCase: false,
      noSortAlphabetically: false,
      requiredFirst: true,
      sortShapeProp: true,
    },
  ],
  'react/static-property-placement': [ 2 ],
  'react/style-prop-object': [ 2 ],
  'react/void-dom-elements-no-children': [ 2 ],
  'react/jsx-boolean-value': [ 2 ],
  'react/jsx-child-element-spacing': [ 2 ],
  'react/jsx-closing-bracket-location': [ 2 ],
  'react/jsx-closing-tag-location': [ 2 ],
  'react/jsx-curly-brace-presence': [ 2, { children: 'never', props: 'never' }],
  'react/jsx-curly-newline': [ 2, 'consistent' ],
  'react/jsx-curly-spacing': [ 2, { spacing: { objectLiterals: 'never' }, when: 'always' }],
  'react/jsx-equals-spacing': [ 2, 'never' ],
  'react/jsx-filename-extension': [
    1,
    {
      extensions: [
        '.js',
        '.jsx',
        '.tsx',
      ],
    },
  ],
  'react/jsx-first-prop-new-line': [ 2, 'multiline-multiprop' ],
  'react/jsx-fragments': [ 2, 'syntax' ],
  'react/jsx-handler-names': [ 2 ],
  'react/jsx-indent': [
    2,
    2,
    { checkAttributes: true, indentLogicalExpressions: true },
  ],
  'react/jsx-indent-props': [ 2, 2 ],
  'react/jsx-key': [ 2 ],
  'react/jsx-max-props-per-line': [ 2, { maximum: 3, when: 'always' }],
  'react/jsx-no-bind': [
    2,
    {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
      ignoreDOMComponents: false,
      ignoreRefs: false,
    },
  ],
  'react/jsx-no-comment-textnodes': [ 2 ],
  'react/jsx-no-duplicate-props': [ 2, { ignoreCase: true }],
  'react/jsx-no-script-url': [ 2 ],
  'react/jsx-no-target-blank': [ 2, { allowReferrer: false, enforceDynamicLinks: 'always' }],
  'react/jsx-no-undef': [ 1 ],
  'react/jsx-no-useless-fragment': [ 2 ],
  'react/jsx-one-expression-per-line': [ 2, { allow: 'single-child' }],
  'react/jsx-props-no-multi-spaces': [ 2 ],
  'react/jsx-tag-spacing': [
    2,
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
  'react/jsx-uses-react': [ 2 ],
  'react/jsx-wrap-multilines': [
    2,
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line',
    },
  ],
  'react-hooks/exhaustive-deps': [ 1 ],
  'react-hooks/rules-of-hooks': [ 2 ],
  "@typescript-eslint/explicit-function-return-type": [ 0 ],
};

const orderConfig = {
  memberTypes: [
    'field',
    'method',
    'constructor',
    'signature',
  ],
  order: 'alphabetically',
};

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [ 'react-app' ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  rules,
  overrides: [
    {
      env: {
        browser: true,
        es2020: true,
        node: true,
      },
      extends: [ 'react-app', 'plugin:@typescript-eslint/recommended' ],
      files: [ '**/*.ts', '**/*.tsx' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 11,
        project: './tsconfig.json',
        sourceType: 'module',
      },
      plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
        '@typescript-eslint',
      ],
      rules: {
        ...rules,
        'no-undef': [ 0 ],
        'react/require-default-props': [ 0 ],
        '@typescript-eslint/array-type': [ 2, { default: 'array', readonly: 'array' }],
        'brace-style': [ 0 ],
        '@typescript-eslint/brace-style': [
          2,
          '1tbs',
          { allowSingleLine: true },
        ],
        '@typescript-eslint/class-literal-property-style': [ 2, 'fields' ],
        'comma-dangle': [ 0 ],
        '@typescript-eslint/comma-dangle': [ 2, 'always-multiline' ],
        'comma-spacing': [ 0 ],
        '@typescript-eslint/comma-spacing': [ 2, { after: true, before: false }],
        '@typescript-eslint/consistent-type-assertions': [ 2 ],
        '@typescript-eslint/consistent-type-definitions': [ 2, 'interface' ],
        'default-param-last': [ 0 ],
        '@typescript-eslint/default-param-last': [ 2 ],
        'dot-notation': [ 0 ],
        '@typescript-eslint/dot-notation': [ 2 ],
        '@typescript-eslint/explicit-function-return-type': [ 1, {
          allowExpressions: true,
        }],
        'func-call-spacing': [ 0 ],
        '@typescript-eslint/func-call-spacing': [ 2, 'never' ],
        'keyword-spacing': [ 0 ],
        '@typescript-eslint/keyword-spacing': [
          2,
          {
            overrides: {
              break: { after: false },
              continue: { after: false },
              debugger: { after: false },
              default: { after: false },
              delete: { after: false },
            },
          },
        ],
        'lines-between-class-members': [ 0 ],
        '@typescript-eslint/lines-between-class-members': [ 2, 'always' ],
        '@typescript-eslint/member-delimiter-style': [ 2 ],
        '@typescript-eslint/member-ordering': [
          2,
          {
            classExpressions: orderConfig,
            classes: orderConfig,
            default: orderConfig,
            interfaces: orderConfig,
            typeLiterals: orderConfig,
          },
        ],
        '@typescript-eslint/method-signature-style': [ 2, 'property' ],
        'no-dupe-class-members': [ 0 ],
        '@typescript-eslint/no-dupe-class-members': [ 2 ],
        'no-duplicate-imports': [ 0 ],
        '@typescript-eslint/no-duplicate-imports': [ 2 ],
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': [ 2, { allow: [ 'arrowFunctions' ]}],
        '@typescript-eslint/no-implicit-any-catch': [ 2 ],
        '@typescript-eslint/no-invalid-void-type': [ 2 ],
        'no-unused-expressions': [ 0 ],
        '@typescript-eslint/no-unused-expressions': [ 2 ],
        'no-useless-constructor': [ 0 ],
        '@typescript-eslint/no-useless-constructor': [ 2 ],
        'object-curly-spacing': [ 0 ],
        '@typescript-eslint/object-curly-spacing': [
          2,
          'always',
          {
            arraysInObjects: false,
            objectsInObjects: false,
          },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [ 1 ],
        '@typescript-eslint/prefer-optional-chain': [ 1 ],
        quotes: [ 0 ],
        '@typescript-eslint/quotes': [ 2, 'single' ],
        semi: [ 0 ],
        '@typescript-eslint/semi': [ 2 ],
        'space-before-function-paren': [ 0 ],
        '@typescript-eslint/space-before-function-paren': [
          2,
          {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        'space-infix-ops': [ 0 ],
        '@typescript-eslint/space-infix-ops': [ 2 ],
        '@typescript-eslint/type-annotation-spacing': [
          2, {
            before: false,
            after: true,
            overrides: {
              arrow: {
                before: true,
                after: true,
              }
            }
          }],
      },
    },
  ],
  settings: { 'import/resolver': { node: { paths: [ 'src' ]}}},
};
