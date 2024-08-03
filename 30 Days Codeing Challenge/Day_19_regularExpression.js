//   Day 19: Regular Expressions

//   Tasks/Activities:

//   Activity 1: Basic Regular Expressions

//     Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const checkRegEx = (regex, str) => {
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
    });
  }
  console.log("------------------------------");
};
const regexTask1 = /\bjavascript\b/gm;
const strTask1 = `javascript in  javascript has javascript. wow lots of javascript`;
checkRegEx(regexTask1, strTask1);

//     Task 2: Write a regular expression to match all digits in a string. Log the matches.
const regexTask2 = /[0-9]/gm;
const strTask2 = `javascript in  javascript has7 javascript. wow 2 1lots 3of 5javascript`;
checkRegEx(regexTask2, strTask2);

//   Activity 2: Character Classes and Quantifiers

//     Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const regexTask3 = /\b[A-Z]\w*\b/gm;
const strTask3 = `javascript in  Javascript has7 javascript. Wow 2 1lots 3Of 5javascript`;
checkRegEx(regexTask3, strTask3);
//     Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const regexTask4 = /[0-9]\w*/gm;
const strTask4 = `javascript in  Javascript has07 javascript. Wow 223 1 lots 31111 Of 51javascript`;
checkRegEx(regexTask4, strTask4);

//   Activity 3: Grouping and Capturing

//     Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

//     Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

//   Activity 4: Assertions and Boundaries

//     Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

//     Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

//   Activity 5: Practical Applications

//     Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

//     Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.
