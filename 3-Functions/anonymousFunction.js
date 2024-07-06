var colors = ['red', 'green', 'blue'];
// TS can automatically infer the type of the return value from
colors.map(function (color) {
    return color.toUpperCase();
});
