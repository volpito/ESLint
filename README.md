# ESLint
$ npm i --save-dev eslint

# or

$ yarn add -D eslint

$ npx eslint --init



? How would you like to use ESLint?
  To check syntax, find problems, and enforce code style
? What type of modules does your project use?
  JavaScript modules (import/export)
? Which framework does your project use?
  React
? Does your project use TypeScript?
  No
? Where does your code run?
  Browser
? How would you like to define a style for your project?
  Use a popular style guide
? Which style guide do you want to follow?
  Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in?
  JSON
  
  
  
  
  
"rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-console": "off",
  }
