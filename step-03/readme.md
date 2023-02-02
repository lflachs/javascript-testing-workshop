# Testing 101 - Step 02

## E2E tests with Cypress

In this section we're going to see how to write E2E test with Cypress.

Cypress is a very powerfull tool to use to write and run E2E tests.

Let's see a very basic with a basic todolist app. We've clone the basic todolist application from the Cypress documentation.

Go to the repository and run `npm install` or `yarn install` to install the packages.

### Install Cypress

To install Cypress, simply run the command `npm install cypress --save-dev`.

Now let's add a script in our package.json:

```
"cypress": "cypress open"
```

Finally, let's run `yarn cypress` or `npm run cypress`.

You should see a window opening with Cypress! Now, click on E2E test.

Once you have clicked, Cypress will automaticaly generate all the configuration file and folder for you.

Now you can choose an environment to run your tests. Let's use the option to start from scratch writing tests ;).

Let's create a spec file called `todo.cy.js ` (By default, Cypress write typescript file but since this project is not using typescript, please rename the file to .js).

Also you need to add a `tsconfig.json` file inside the cypress folder (it seems like by default cypress really want you to use typeScript...).

Now let's write the beginning of our test.

Like we have done with jest, we must start with the `describe` function. Inside of it we can write our first test:

```
describe("template spec", () => {
  it("Should add a todo item", () => {
    cy.visit("http://localhost:8888");
  });
});

```

Now if you run yarn or npm test, you should see the page openning.

Let's continue with the test!

### Target element

In Cypress, we can target DOM element, it's pretty easy, you can even use the graphical interface to find the selector, but be careful and try to write coherent selectors.

Let's select the input:

```
cy.get('.new-todo')
```

Now we can do some action there, like for instance typing:

```
cy.get('.new-todo').type('Flying to the moon')
```

Now we should press the Enter key:

```
cy.get('.new-todo').type('Flying to the moon').type("{enter}")
```

And now, we simply have to check that the todo has been successfully added !

```
expect(cy.get(".todo-list li").should("have.length", 1));
expect(cy.get(".todo-list li").should("have.text", "Flying to the moon"));
```

### Exercice

Now it's your turn! Write a test for checking a todolist element.
