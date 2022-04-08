const line = names => {
    let lineStr = ''
    names.forEach((name, i) => {
        lineStr = lineStr.concat(`${i + 1}. ${name} `)
    })
    const lineBeginning = 'The line is currently: '
    return lineStr.length ? `${lineBeginning}${lineStr}` : `${lineBeginning}empty.`
}

const takeANumber = (arr, name) => {
    arr.push(name)
    console.log(`Welcome, ${name}. You are number ${arr.length} in line.`)
}

const nowServing = arr => console.log(`Currently serving ${arr.shift()}.`)
// That is super cool to save a step and call shift() in the template literal,
// but is it readable?

const lineCutter = (arr, name) => {
    arr.unshift(name)
    console.log(`${name} cut the line! Shun, shuuuuun.`)
}

const closeKatz = arr => {
    console.log('Beat it, kids!')
    // They collectively choose to leave in the order they came in.
    while(arr.length) {
        console.log(`${arr[0]} left.`)
        arr.shift()
    }
    console.log(`${line(arr)} Time to go home.`)
}

// Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

console.log(line(katzDeli)) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

console.log(line(katzDeli)) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

console.log(line(katzDeli)) //=> "The line is currently: 1. Kent 2. Matz"

lineCutter(katzDeli, 'Charlie') //=> "Charlie cut the line! Shun, shuuuuun."

console.log(line(katzDeli)) //=> "The line is currently: 3. Charlie 2. Kent 3. Matz"

closeKatz(katzDeli) /*=> "Beat it, kids!"
                         "Charlie left."
                         "Kent left."
                         "Matz left."
                         "The line is currently: empty. Time to go home."
                    */