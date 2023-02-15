// 09. Boolean value is either true or false.
    // - Write three JavaScript statement example which provide truthy value.
    // - Write three JavaScript statement example which provide falsy value.

    let isTrue = ["hello", true, -1, 0, null, undefined, Infinity]
    let booleanResult = isTrue.map(value => value?`${value} is truthy value`:`${value} is falsy value`)
    console.log(booleanResult)