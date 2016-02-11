# SVG FeConvolveMatrix

This is a simple application to get acquainted with [SVG Convolve Matrix filter](https://www.w3.org/TR/SVG/filters.html#feConvolveMatrixElement).

Here is a live **[demo](https://github.com/AlexanderKozhevin/svg-convolution-matrix)**

As also you can run it locally via *gulp-connect*.

To make it:

1. Install npm dependencies
```javascript
npm install
```
2. Run Gulp
```javascript
gulp
```
Page will be available on *localhost:8080*.



---

*feConvolveMatrix* has number of different properties.

1. order
2. kernelMatrix
3. divisor
4. bias
5. edgeMode

and some default ones.

In this demo only first 2 of them are manipulated.
