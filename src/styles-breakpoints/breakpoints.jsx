const sizes = {
    smallsize: '480px' , //small sizes
    mediumsize: '768px', //medium sizes
    bigsize: '1024px', //big sizes
    largeScreen: '1200px', //large sizes
    extraLarge: '1201px', //extra large sizes (min-width)
}

const breakpoints = {
    smallsize: `(max-width: ${sizes.smallsize})`,
    mediumsize: `(max-width: ${sizes.mediumsize})`,
    bigsize: `(max-width: ${sizes.bigsize})`,
    largeScreen: `(max-width: ${sizes.largeScreen})`,
    extraLarge: `(min-width: ${sizes.extraLarge})`,
}

export default breakpoints