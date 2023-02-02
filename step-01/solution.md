# Solution

You should follow what we've talked about before. First write the acceptance criterias for the task:

## Acceptance criterias

- Given an array of objects where each object represents an item on the cart, when the function is called, then a price should be returned
- Given an invalid parameter, when the function is called, then an error message should be thrown
- Given an array with items with quantity greater than 1, when the function is called, then the total price should be calculated based on item quantity
- Given an array with items and a discount, when the function is called, then the total price should equal to the sum of all item prices minus the discount

### Testing strategy

| Test Tool | Testing Pipeline                                                                                                                                                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unit test | 1. Write unit test using Jest 2. Create a fixture array that represent a cart 3. Write the test scenario for the comon case 4. Write the test scenario in case of wrong argument 5. Write a test taking quantity into account 6. Write a test taking the discount into account |
