# Testing 101 - Step 02

## Unit testing

As we've seen before, unit tests are small test that we could use to test function or small unit of code.

To test it in JavaScript, we usually use the test runner `Jest`. But there is plenty of other testing framework and most of the time, they share a quit similar approach, so choose the one you like and don't worry too much about it.

### Jest

Jest is a JavaScript test runner, use to create, run and structure tests. It's basically a npm package that you can install in your project to test your application.

Jest has been developped by Facebook and is one of the most popular testing runner.

#### Install Jest

To install Jest, it's very simple, simply run `npm install -D jest` or `yarn add --dev jest`.

Remember, since test are only used for dev purposes, don't install it without the `-D` flag.

#### Write your first test

Let's use the TDD approach and start by writing our test before our function. In the folder `/tests` let's create a file called `sum.test.js`.

=> You will sometimes see test called using `.spec.js`, both are possible and working, it's totally fine to use one or the other, just make sure to stick to one in your project to prevent confusion.

Inside the file, let's start the test by using the test function.

```
test('Sum function', () => {

})
```

When defining a test, we use the `describe` function. We give the name of the test serie as first argument and a callback function with our test as second argument.

Then, we can use the `it` function to define a test:

```
describe('Sum function', () => {
    it('should return the sum of two number', () => {

    })
})

```

The `it` function takes the name of the specific test and a callback function with our test scenario.

Then, we can use the `expect` function to assert the result of the function with an expected output (example: 2 + 2 = 4)

```
describe('Sum function', () => {
    it('should return the sum of two number', () => {
        expect(sum(2, 2)).toBe(4)
    })
})
```

#### Run the test

To run the test, we need to add a script in our `package.json` file.

```
"scripts": {
    "test": "jest"
},
```

Then we can simply run `npm test` or `yarn test` to start the test!

As expected, the test is failling, and that's normal, we haven't implemented the function yet!

It's possible to watch changes on the tests file so Jest automatically re-run the tests using the `--watch` flag.

But before implementing the function, let's write another more tests!

```
describe("Sum function", () => {
  it("should return the sum of two positive number", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should return the sum of two negative number", () => {
    expect(sum(-2, -2)).toBe(-4);
  });

  it("Should return the sum of two floating numbers", () => {
    expect(sum(2.2, 2.2)).toBe(4.4);
  });

  it("Should handle decimal rounding correctly", () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
  });

  it("Should return the same input if only one input is given", () => {
    expect(sum(2)).toBe(2);
  });

  it("If an array of number is passed, the sum of the array should be returned", () => {
    expect(sum([2, 2])).toBe(4);
  });

  it("Should throw an error if more than two input is given", () => {
    expect(() => sum(2, 2, 2)).toThrow(new Error("Too many arguments"));
  });

  it("should throw an error if one of the arguments is not a number", () => {
    expect(() => sum(2, "Hello")).toThrow(
      new Error("Arguments must be numbers")
    );
  });
});

```

As you can see, when you really take the time to think about all edge cases, the list can become pretty long!

Now run the test! The test should still fail!

#### Write the code

Now it's time to write the code ! A good approach you can take is to run the test one by one and to fix each case one after the other.

You can use the function `.only` to run only one test at a time:

```
it.only("should return the sum of two positive number", () => {
    expect(sum(2, 2)).toBe(4);
});

```

Now, it's your mission to write the code to make the test pass !

### Exercise

Now, let's go back to the first exercice, can you write the test for this function? Give it a try!

## Husky and pre-commit/pre-push hook

As we learned before, the goal of testing is to prevent error to be pushed into production.

One good way we can do that is by using pre-git hooks.

Pre-git hooks are basically hooks that you can run before or after certains git actions.

For example, we could ask to run our test before commiting or before pushing, this way we ensure that nobody can push or commit something with a failing test in production.

For that we can use Husky!

To install husky, simply run the command `npm install husky -D`. Then we need to edit our `package.json` and add a script called `prepare` to ensure the hook are enable after install.

Then, we have to run it once `npm run prepare` or `yarn prepare`. Then we can add a hook using `npx husky add .husky/pre-commit "npm test"`.

Husky has created a folder with our pre-commit hook.

Now, let's try to break our code, and try to commit to see if it work.

## Github Actions

Another way to ensure that we're not pushing bad code into production is to run the test using a github action.

Github action can be triggered when a developer push or create a PR on a repository.

To create a github action, create a file here: `.github/workflows/jest.yml`.

Inside this file, we're going to define what our Github action will do.

The first thing to add is the name of the action, then we should precise when the action should be run, and finaly, we need to define the task to do:

```
name: Jest
on:
  workflow_dispatch:
  pull_request:
    branches:
      - master

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install packages
        run: cd step-02 && npm install --only=dev
      - name: Run tests
        run: cd step-02 && npm run test
```

Now if you go to github, you should see the action, and be able to trigger it or it will automatically be trigger when a PR is opened!
