function randomOutput() {
    let randomList = ['fart', 'squirl','shit', 'bottle', 'cookie', 'dog', 'phone', 'mouse', 'pie'];
    let newStr = '';
    for(let i = 0; i < 4; i++) {
        newStr += `${randomList[Math.floor(Math.random() * 9)]} `
    };
    return newStr
}
console.log(randomOutput());