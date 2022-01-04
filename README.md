# Dataminr Assignment

## Technologies and tools

* React
* TypeScript
* Jest
* React testing library
* Styled component

<br/>

## Basic concept

* Drive the data and layout of form by using dynamic schema: 
  schema/setting/*.ts

* Prevent error codings by assigning the rules of type expressions: 
  schema/type.ts

* Assembling reusable components:
  src/components/

* Avoid bugs and code debet by writing test with Jest and React testing library:
  __test__/integration/integration.test.tsx


<br/>

## Can be improved

* Use redux to control and store the setting data
* Import the data from database

<br/>

## Available Scripts


In the project directory, first you need to install the node modules

```
npm install
```

<br/>

Then the browser will open http://localhost:3310 Automatically.
The page will reload if you make edits.

```
npm run start
```

<br/>

Launch the test runner.

```
npm run test
```

<br/>

Bundle the files with base and prod webpack config

```
npm run prod 
```