const sizes = {
    smallsize: '480px' , //small sizes
    mediumsize: '780px', //medium sizes
    bigsize: '1010px', //big sizes
}

const breakpoints = {
    smallsize: `(max-width: ${sizes.smallsize})`,
    mediumsize: `(max-width: ${sizes.mediumsize})`,
    bigsize: `(max-width: ${sizes.bigsize})`,
}

export default breakpoints