(function func() {
    var str1 = prompt("first word", "просветитель");
    var str2 = prompt("second word", "терпеливость");

    str1 = str1.toUpperCase().trim();
    str2 = str2.toUpperCase().trim();

    var len1 = str1.length;
    var len2 = str2.length;

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