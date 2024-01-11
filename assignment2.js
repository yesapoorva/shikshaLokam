function asciiConversions(s) {
    let result = '';
    let asciiarr = [];
    let modifiedset = new Set()

    for (let i = 0; i < s.length; i++) {
        asciiarr.push(s.charCodeAt(i));
    }

    for (let i = 0; i < asciiarr.length; i++) {
        let asciiValue = asciiarr[i]

        if (asciiValue % 2 === 0 && i < s.length - 1 && !modifiedset.has(i+1)) {
            let newAscii = asciiarr[i+1] + (asciiValue % 7);
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii;
            asciiarr[i+1] = newAscii;
            result += String.fromCharCode(newAscii);
            modifiedset.add(i+1)
        } 
        else if (asciiValue % 2 !== 0 && i > 0 && !modifiedset.has(i-1)) {
            let newAscii = asciiarr[i - 1] - (asciiValue % 5);
            newAscii = (newAscii < 0 || newAscii > 127) ? 83 : newAscii;
            asciiarr[i - 1] = newAscii;
            result += String.fromCharCode(newAscii);
            modifiedset.add(i-1)
        } 
        else {
            asciiarr[i] = asciiarr[i];
            result += String.fromCharCode(asciiValue);
        }
    }

    console.log(asciiarr);
    return result;
}

const s = "sHQen}";
console.log(asciiConversions(s));



