# Testing 101 - Step 01

## What is software Testing?

How do you know if your app is fully working the way it should?

In order to know if your app is working you must test it. Testing can come to different form, and the good news is, you are probably already testing your applications and software, the bad news (and it's the goal of this workshop to help you) is that you're probably not doing it in an efficient manner.

So what is Software Testing? Essentially, softwar testing is the process of **evaluating and verifying** that an application or software is working properly.

Testing can take many forms, such as running the software locally and manually checking its functionality. However, this approach is not only inefficient, but it's also risky.

Manually testing your application can be time-consuming, as you may need to repeat the same steps multiple times to ensure its proper functioning. Additionally, you may miss important issues in your code that could be pushed to production later on.

It's natural for humans to make mistakes while coding. But when working for a company with thousands of users and business-critical features, a low test coverage puts the company at high risk and puts each developer under significant stress.

Think of it like performing surgery without proper medical equipment. While it may be possible, it's much more difficult, time-consuming, and dangerous.

So, in order to make sure that your software is working properly, you need to have a good testing process in place. This process can involve different type of tests such as unit testing, integration testing, end to end testing, etc...

By using these testing techniques, you can test every aspect of your application, from the smallest units of code to its end-to-end functionality. This gives you confidence in the correct functioning of your software when it is released to users.

Let's see more in details how to do it properly.

### Evaluating

The testing process should start **before** the feature is even developped, during the conceptualisation phase.

The reason for it is because testing should be considered as an integral part of Software development, not an afterthought.

Thinking about how to test a feature should come with a User Story. When writing the user story or the feature requirement, you should always think about what the feature is supposed to do!

#### Acceptance Criterias

For that, you can use the acceptance criterias. The acceptance criterias will help you to have a comon understanding, as a dev team and with your client about the expected behaviour of a specific feature.

Wthout it, you simply don't really know what is expected and how things are supposed to work.

You can use the given/when/then template to write the acceptance criterias. Here is an example:

Let's imagine you're building a login form, here is what the acceptance criterias should be:

`*Given* that the user is on the login page, *when* the user enters their email and password, *then* the user should be redirected to the homepage`

That's very clear here what's expected. It's good to be as detailled as possible, you can write multiple acceptance criterias to make it even clearer:

`*Given* that the user is on the login page, *when* the user enter a wrong email or password, *then* the user should see an alert box and be invited to try again`.

It's a very important step because it's a way for you to know what's required for this feature to be pushed in production, and therefore, what you should test.

#### Test planning

It's also a good idea to write down what is the testing process for a specific feature. For that, you simply have to write down which tool you're planning to use for testing this feature and what would the testing pipeline look like.

| Test Tool                  | Testing Pipeline                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Manual Testing             | 1. Verify that the login page is accessible and has the correct UI elements<br /> 2. Enter valid credentials and verify successful login<br /> 3. Enter invalid credentials and verify error message is displayed <br />4. Test the "Forgot Password" functionality <br />5. Test the "Remember Me" functionality                                            |
| Automated Testing E2E test | 1. Write automated tests using a testing framework such as Cypress 2. Verify that the login page is accessible and has the correct UI elements 3. Verify successful login with valid credentials 4. Verify error message is displayed with invalid credentials 5. Verify the "Forgot Password" functionality<br /> 6. Verify the "Remember Me" functionality |

#### Test creation

Then, you should start to setup the environment and start writing your tests.

The best approach is to start by writing the tests before you start coding the feature itself.

This approach is called Test Driven Development (TDD) and you should try to use it as much as possible, especially when you're working on Backend or creating non visual services or functions.

The TDD approach might not be ideal for frontend testing, but you can also give it a try and see which approach work best with you.

## The different type of tests

Now that you know how to plan the testing process, let's take a look at the different type of tests we can use and for which usecase you should use them:

### Unit tests

Unit testing is the process of testing the smallest unit of code in the software. A unit could be a single function, a class, or an entire module.

The goal of unit testing is to make sure that the individual units of the software are working properly.

It's usually done by writing automated tests using a testing framework such as Jest or Mocha.

Unit tests are good for testing individual functions, classes, and modules.

Example:

- Testing a helper function that make some calculation
- Testing a class that handles the authentication of a user
- Testing a module that handles the database connection

### Integration Testing

Integration testing is a type of testing that focuses on the interactions between multiple components or systems. Unlike unit tests, which test individual units of code in isolation, integration tests aim to identify bugs in the connections and dependencies between various components.

Integration tests verify that the components work together as intended, just like the final product will be used in the real world. The goal is to catch any errors or issues before the product reaches the end-users.

Here are a few examples of integration testing with Node.js:

- Backend route testing
- Testing the integration between Database and backend
- Testing the behaviour between different services/apis
- Testing how your React components work together in an application

### End to End testing

End-to-End (E2E) testing is a method of testing that checks the entire flow of an application, from start to finish, to ensure that it works as expected. This type of testing simulates the real-world scenario of a user interacting with the application, and it tests the integration of all the components of the application, including the user interface, the backend services, and any external systems it may interact with.

The goal of E2E testing is to catch any bugs or issues that may arise when the application is used in a production environment, and to ensure that the application is functioning correctly from the user's perspective.

Examples of E2E tests include testing the complete login process of an application, from entering the username and password to accessing the dashboard, or testing the complete checkout process of an e-commerce website, from adding items to the cart to submitting the order.

E2E tests can be automated using tools such as Selenium, Cypress, or Puppeteer. These tools allow developers to write scripts that automate the process of navigating through the application and testing its behavior, saving time and reducing the risk of manual errors.

### Let's practice!

You have been given a requirement to develop a Javascript function to calculate the total price from a shopping cart.

What process are you going to use? How should you start? Write down and explain your process following to what we've learned so far.
