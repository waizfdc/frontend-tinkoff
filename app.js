(function func() {
    var str1 = prompt("first word", '').toUpperCase().trim();
    var str2 = prompt("second word", '').toUpperCase().trim();

    if( str1 != str2) {
       
        str1 = str1.replace(/\s+/g, '').split('').sort().join('');
        str2 = str2.replace(/\s+/g, '').split('').sort().join('');

        if(str1 == str2) {
            alert("anagram");
            return;
        }
    }

    alert("not anagram");
    return;
}());

// (function func() {
//     var str1 = prompt("first word", '').toUpperCase().replace(/\s+/g, '').split('').sort().join('');;
//     var str2 = prompt("second word", '').toUpperCase().replace(/\s+/g, '').split('').sort().join('');;
//     if(str1 == str2) {
//         alert("anagram");
//     } else {
//         alert("not anagram");
//     }
// }());