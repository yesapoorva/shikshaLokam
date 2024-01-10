function print_shortest_substrings(s, x){
    let substrings = [];

    for(let i=0; i<s.length; i++){
        for(let j=i+1; j<s.length; j++){
            if(s[i] == s[j]){
                substrings.push(s.slice(i,j+1))
            }
        }
    }

    const equalLength = [];
    const greaterLength = [];

    substrings.forEach(str => {
        if (str.length === x) {
            equalLength.push(str);
        } else if (str.length > x) {
            greaterLength.push(str);
        }
    });

    return equalLength.length > 0 ? equalLength : [greaterLength.sort((a, b) => a.length - b.length)[0] || ''];
}
            


s = "abccdbacca"
x = 3
console.log("x =", x);
console.log(print_shortest_substrings(s, x));

x = 4
console.log("x =", x);
console.log(print_shortest_substrings(s, x));

x = 5
console.log("x =", x);
console.log(print_shortest_substrings(s, x));

x = 6
console.log("x =", x);
console.log(print_shortest_substrings(s, x));

x = 7
console.log("x =", x);
console.log(print_shortest_substrings(s, x));

x = 8
console.log("x =", x);
console.log(print_shortest_substrings(s, x));


