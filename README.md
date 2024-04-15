## Belajar Node JS Express

## 1. Persiapan

1. mkdir node-belajar1

2. Membuat repo di github

```
echo "# node-belajar1" >> README.md
git init
git add .
git commit -m "first commit"
git branch -M main
//git remote add origin git@github.com:silmi-ayra/node-belajar1.git
git remote add origin github.com-silmi:silmi-ayra/node-belajar1.git
git push -u origin main
```

3. Init dan instal depedency

```
npm init
npm install express
npm install jest --save-dev
npm install babel-jest --save-dev
npm install @babel/preset-env --save-dev
npm install @babel/plugin-transform-runtime --save-dev
npm install jest supertest @types/jest --save-dev
npm install --save-dev nodemon
npm install winston winston-daily-rotate-file
```

4. Edit file package.json

```
"main": "./src/index.js",
"type": "module",
"scripts": {
    "test": "jest",
    "start": "node ./src/index.js",
    "dev": "nodemon ./src/index.js"
  },
"jest": {
"maxConcurrency" : 2,
"verbose": true,
"transform": {
"^.+\\.[t|j]sx?$": "babel-jest"
},
"collectCoverage": true,
"coverageThreshold": {
"global": {
"branches": 100,
"functions": 100,
"lines": 100,
"statements": 100
}
},
"collectCoverageFrom": [
"src/**/*.{js,jsx}",
"!vendor/**/*.{js,jsx}"
]
},
```

5. Tambahkan file babel.config.json

```
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

6. Tambahkan file .gitignore

```
node_modules
build
npm-debug.log
.nyc
.env
.DS_Store
.idea
coverage
\*.log
```

## 2. Mengenal express JS
