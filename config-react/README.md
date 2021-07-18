# Passos para cria um iniciar um projeto Reactjs
-----


### No diretorio do projeto execute o comando abaixo:

```
npx create-react-app .
```
Após a criação do projeto vamos configurar o eslint

### Iniciar o eslint:

```
npx eslint --init
```

### Instalar o prettier:

```
npm install -d prettier eslint-config-prettier eslint-plugin-prettier
```

### Crie o arquivo de configuração `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};

```

### Crie o arquivo de configuração `.prettierrc.js`

```javascript
module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2
}
```

### Corrigir os arquivos

```
npx eslint src/**/*.js --fix
```

### Instalar `prop-types`

```
npm i prop-types
```

