# Division by Zero Bug in JavaScript

This repository demonstrates a common error in JavaScript: improper handling of division by zero.  The `foo` function incorrectly returns 0 when the denominator is 0, instead of throwing an error or returning Infinity as mathematically expected.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file demonstrates the corrected version.

## How to reproduce the bug:
1. Clone this repository.
2. Run `bug.js` using Node.js (or a similar JavaScript runtime).
3. Observe the incorrect output when calling `foo(10,0)`.

## Solution:
The corrected version includes more robust error handling.  Consult `bugSolution.js` for a possible fix.  Options include throwing an error or explicitly checking for zero and returning Infinity or NaN as appropriate.