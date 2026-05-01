let reg: RegExp;
let pattern: RegExp = /abc/; // search for "abc" in a string
let pattern2: RegExp = new RegExp('abc'); // same as above
let pattern3: RegExp = new RegExp('abc', 'i'); // search for "abc" in a string, case-insensitive
let pattern4: RegExp = /abc/i; // same as above
let pattern5: RegExp = /abc/g; // search for all occurrences of "abc" in a string
let pattern6: RegExp = /abc/gi; // search for all occurrences of "abc" in a string, case-insensitive
let pattern7: RegExp = /[a-z]+/; // search for one or more lowercase letters in a string
let pattern8: RegExp = /[A-Z]+/; // search for one or more uppercase letters in a string
let pattern9: RegExp = /[0-9]+/; // search for one or more digits in a string
let pattern10: RegExp = /[a-zA-Z0-9]+/; // search for one or more alphanumeric characters in a string
let pattern11: RegExp = /[a-zA-Z0-9]+/g; // search for all occurrences of one or more alphanumeric characters in a string
let pattern12: RegExp = /[a-zA-Z0-9]+/gi; // search for all occurrences of one or more alphanumeric characters in a string, case-insensitive
let pattern13: RegExp = /[a-zA-Z0-9]+/gim; // search for all occurrences of one or more alphanumeric characters in a string, case-insensitive, multiline
let pattern14: RegExp = /[a-zA-Z0-9]+/gims; // search for all occurrences of one or more alphanumeric characters in a string, case-insensitive, multiline, dotall
let pattern15: RegExp = /[a-zA-Z0-9]+/gimsu; // search for all occurrences of one or more alphanumeric characters in a string, case-insensitive, multiline, dotall, unicode
let pattern16: RegExp = /[a-zA-Z0-9]+/gimsuy; // search for all occurrences of one or more alphanumeric characters in a string, case-insensitive, multiline, dotall, unicode, sticky

let regex: RegExp = /hello/;
console.log(regex.test('hello world')); // true
console.log(regex.test('Hello World')); // false
console.log(regex.test('hi there')); // false

let email: string = 'test@gmail.com';
let email2: string = 'test@gmail.c';
let emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let emailRegex2: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // same as above, but allows for more characters in the local part and domain part
console.log(emailRegex.test(email)); // true
console.log(emailRegex2.test(email)); // true
console.log(emailRegex.test(email2)); // false
console.log(emailRegex2.test(email2)); // true, because it allows for a single character in the top-level domain

//^ - start of string
//[^\s@]+ - one or more characters that are not whitespace or @
//@ - literal @ symbol
//[^\s@]+ - one or more characters that are not whitespace or @
//\. - literal dot
//[^\s@]+ - one or more characters that are not whitespace or @
//$ - end of string

// The above regex checks for a valid email address format, but it is not perfect and may allow some invalid email addresses or reject some valid email addresses.
// It is always recommended to use a more comprehensive email validation library or service for production use.

let phone: string = '0744123456';
let phoneRegex: RegExp = /^07\d{8}$/;
console.log(phoneRegex.test(phone)); // true

//^ - start of string
//07 - literal 07
//\d{8} - exactly 8 digits
//$ - end of string

let text1: string = 'Am 3 mere si 25 de pere.';
let numberRegex: RegExp = /\d+/g;
let numbers: string[] = text1.match(numberRegex) || [];
console.log(numbers); // ["3", "25"]

let text2: string = 'Salut, Ion și Maria!';
// let wordRegex: RegExp = /Ion/g;
let wordRegex: RegExp = /Ion/;
let result2: string = text2.replace(wordRegex, 'Andrei');
console.log(result2); // "Salut, Andrei și Maria!"

let text3: string = 'Salut   Ion    și    Maria!';
let result3: string = text3.replace(/\s+/g, ' ');
console.log(result3); // "Salut Ion și Maria!"

// \s - matches any whitespace character (space, tab, newline, etc.)
// + - matches one or more of the preceding element (in this case, one or more whitespace characters)
// g - global flag, which means that the replacement will be applied to all matches in the string, not just the first one
// The above code replaces multiple consecutive whitespace characters with a single space, effectively normalizing the spacing in the string.
// The result is "Salut Ion și Maria!", with only single spaces between the words.
// Note: The above regex will also replace tabs and newlines with a single space, which may or may not be desired depending on the context.
// If you want to preserve tabs and newlines, you can use the following regex instead:
// text3.replace(/ {2,}/g, ' '); // replaces only multiple spaces with a single space, preserving tabs and newlines
// {2,} - matches two or more spaces
// g - global flag, which means that the replacement will be applied to all matches in the string, not just the first one

let password: string = 'abc123';
let passwordRegex: RegExp = /^.{6,}$/;
console.log(passwordRegex.test(password)); // true

//^ - start of string
//.{6,} - matches any character (except for line terminators) at least 6 times
//$ - end of string

function validateEmail(email: string): boolean {
  let emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

console.log(validateEmail('test@gmail.com')); // true
console.log(validateEmail('test@gmail.c')); // false
console.log(validateEmail('testgmail.com')); // false
console.log(validateEmail('test@.com')); // false
console.log(validateEmail('test@com')); // false
