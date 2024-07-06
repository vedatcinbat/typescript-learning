const colors = ['red', 'green', 'blue'];

// TS can automatically infer the type of the return value from
colors.map(color => {
    return color.toUpperCase()
})