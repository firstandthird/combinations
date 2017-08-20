Combinations [![Build Status](https://travis-ci.org/jgallen23/combinations.svg?branch=master)](https://travis-ci.org/jgallen23/combinations)
============

# Installation

    npm install combinations

# Usage

    combinations(array[, min, max])

*   takes in an array, and outputs an array of arrays, containing all possible combinations of values in the original array.
*   combinations are of all sizes: all combinations of one element, and all combinations of 2 elements, and so on
*   `min` sets minimum number of elements in a combination
*   `max` sets maximum number of elements in a combination
*   if maximum combination value is bigger than array elements it will be overridden to the array length

# Example

    var combinations = require('combinations');
    var myArray = ['red', 'orange', 'yellow', 'green'];
    
    combinations(myArray); 
  
    //Output:
    //  [ [ 'red' ],                      [ 'orange' ],    
    //    [ 'yellow' ],                   [ 'green' ],  
    //    [ 'red', 'orange' ],            [ 'red', 'yellow' ],
    //    [ 'red', 'green' ],             [ 'orange', 'yellow' ],
    //    [ 'orange', 'green' ],          [ 'yellow', 'green' ],
    //    [ 'red', 'orange', 'yellow' ],  [ 'red', 'orange', 'green' ],
    //    [ 'red', 'yellow', 'green' ],   [ 'orange', 'yellow', 'green' ],
    //    [ 'red', 'orange', 'yellow', 'green' ] ]

# Example with a minimum array size

    combinations(myArray, 2);
    
    //Output:
    //  [ [ 'red', 'orange' ],            [ 'red', 'yellow' ],
    //    [ 'red', 'green' ],             [ 'orange', 'yellow' ],
    //    [ 'orange', 'green' ],          [ 'yellow', 'green' ],
    //    [ 'red', 'orange', 'yellow' ],  [ 'red', 'orange', 'green' ],
    //    [ 'red', 'yellow', 'green' ],   [ 'orange', 'yellow', 'green' ],
    //    [ 'red', 'orange', 'yellow', 'green' ] ]

# Example with a minimum and maximum array size

    combinations(myArray, 2, 3);
    
    //Output:
    //  [ [ 'red', 'orange' ],            [ 'red', 'yellow' ],
    //    [ 'red', 'green' ],             [ 'orange', 'yellow' ],
    //    [ 'orange', 'green' ],          [ 'yellow', 'green' ],
    //    [ 'red', 'orange', 'yellow' ],  [ 'red', 'orange', 'green' ],
    //    [ 'red', 'yellow', 'green' ],   [ 'orange', 'yellow', 'green' ] ]
