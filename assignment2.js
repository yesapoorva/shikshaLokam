function asciiConversions(s) {
    let result = '';
    let modifiedAscii = [];

    for (let i = 0; i < s.length; i++) {
        let asciiValue = s.charCodeAt(i);

        if (asciiValue % 2 === 0 && i < s.length - 1) {
            let newAscii = s.charCodeAt(i + 1) + (asciiValue % 7);
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii;
            modifiedAscii.push(newAscii);
            result += String.fromCharCode(newAscii);
        } 
        else if (asciiValue % 2 !== 0 && i > 0) {
            let newAscii = s.charCodeAt(i - 1) - (asciiValue % 5);
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii;
            modifiedAscii.push(newAscii);
            result += String.fromCharCode(newAscii);
        } 
        else {
            modifiedAscii.push(asciiValue);
            result += String.fromCharCode(asciiValue);
        }
    }

    console.log(modifiedAscii);
    return result;
}

const s = "sHQen}";
console.log(asciiConversions(s));



