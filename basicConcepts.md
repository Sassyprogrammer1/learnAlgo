   Bitwise operations 
   By using bit arithmatic we can make simple solutions like finding even and odd numbers 
   faster and even simpler

1. How to find a number is even or odd
   Suppose we have a number 30 
   The simple approach to find if it is an even number would be :-
   `30 % 2 == 0, if it's true the number is even and if it's false the number is odd.`
   By using the bitwise operator we can find out if a number is even or odd by simly
   using a bitmask of `1` and doing the `&` operator with the number because an odd number in binary 
   representation always has a `1` at the end and an even number has `0`.
   For e.g `1010101` is an add number where as `101010100` is an even number.
   now if we multiply the binary number with a bitmask of `1`.
   `1010101 & 0000001 == 0`.

2. We can half a number in binary representation by shifting the binary numbers
   to the right by one bit. For e.g `00011110` is equal to `30` where as the `00001111` is `15`.