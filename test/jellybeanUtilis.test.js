// IMPORT MODULES under test here:
// import example from '../example.js';
import { isSick } from '../jellybeanUtilis.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const aFewBeans = 4;
    const expected = false;

    const tooManyBeans = 30;
    const tooManyExpected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actualFew = isSick(aFewBeans);
    const acutalTooMany = isSick(tooManyBeans);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
