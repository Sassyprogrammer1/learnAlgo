let arr = [[6,6,8], [8,9,7]]
console.log(arr.map(item => {
    return item.reduce((a,b) => {
        return a+b;
    })
}))