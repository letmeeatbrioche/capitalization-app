// console.log('RAGGLE FRAGGLE NOW');

// Create a function that capitalizes every letter in a string
// I - a string
// O - a string (input string, modified in capitalization)
// C - None
// E - If empty input is empty, return input

// Edge case
// Apply toUpperCase on input string
// Return input string after applying toUpperCase to it

function allUpperCase(text: string): string {
  // console.log('in allUpperCase')
  // If text is an empty string/is falsy
  //   Return text
  // Return text modified with toUpperCase method
  if (!text) {
    return text;
  }
  return text.toUpperCase();
}

function allLowerCase(text: string): string {
  // console.log('in allLowerCase')
  // If text is an empty string/is falsy
  //   Return text
  // Return text modified with toLowerCase method
  if (!text) {
    return text;
  }
  return text.toLowerCase();
}

// Iterate over input
//   Capitalize the first and every other letter, lowercase all other letters
function capEveryOtherFirst(text: string): string {
  // console.log('in capEveryOtherFirst')
  if (!text) {
    return text;
  }
  // Turn text into an array of characters
  // Iterate over array
  //   If the current character is a space, skip/continue
  //   If the previous operation was uppercase
  //     Lowercase the current character
  //   If the previous operation was lowercase (or if i is equal to 0)
  //     Uppercase the current character
  //  Return array joined back into a string with the same delimiter

  // const lowerText = text.toLowerCase()
  let chars: string[] = text.split('')
  let prevOperation: string = ''

  for (let i: number = 0; i < chars.length; i++) {
    if (!chars[i].match(/[A-Za-z]/)) {
      continue
    }

    if (prevOperation === 'lower' || prevOperation === '') {
      chars[i] = chars[i].toUpperCase();
      prevOperation = 'upper'
    } else {
      chars[i] = chars[i].toLowerCase()
      prevOperation = 'lower'
    }
  }

  return chars.join('');
}

// Iterate over input
//   Capitalize the second and every other letter, lowercase all other letters
function capEveryOtherSecond(text: string): string {
  if (!text) {
    return text;
  }

  let chars: string[] = text.split('')
  let prevOperation: string = ''

  for (let i: number = 0; i < chars.length; i++) {
    if (!chars[i].match(/[A-Za-z]/)) {
      continue
    }

    if (prevOperation === 'upper' || prevOperation === '') {
      chars[i] = chars[i].toLowerCase();
      prevOperation = 'lower';
    } else {
      chars[i] = chars[i].toUpperCase();
      prevOperation = 'upper';
    }
  }

  return chars.join('');
}

function capEveryWord(text: string): string {
  if (!text) {
    return text;
  }

  // Method 2
  //   iterate over the string
  //     save each run of characters and spaces as elements in an array
  //   map over the array, each string
  //    if the string starts with a letter, capitalize it and lowercase the rest of the string
  //    if the string does NOT start with a letter, do nothing
  // turn array back into string and return it

  // Create a "words" array, set to nothing
  // Create a "word" variable, set to empty string
  // Iterate over the input text
  //   Iterate until you have a run of characters that's all spaces or no spaces
  //   Save each run to the array
  // Set a variable to a map over the array
  //   If the string element starts with a letter
  //     Capitalize it & lowercase the rest (check they're letters first) & return the new string
  //   Otherwise (if the string does not start with a letter)
  //     Return the string
  // Return the mapped array joined back into a string

  let words: string[] = [];
  let word: string = '';
  for (let i: number = 0; i < text.length; i++) {
    // if current char is a space and word variable is spaces or empty
    if (text[i] === ' ') {
      if (i === 0 || word.trim() === '') {
        word = word + text[i];
        if (i === text.length - 1) {
          words.push(word);
        }
      } else {
        words.push(word); // pushes the current word of non-spaces to the words array
        word = text[i];
      }
    // if current char is not a space or letter
    } else if (!text[i].match(/[A-Za-z\s]/)) {
      if (!word.match(/[A-Za-z\s]/g)) {
        word = word + text[i];
        if (i === text.length - 1) {
          words.push(word);
        }
      } else {
        words.push(word);
        word = text[i];
        if (i === text.length - 1) {
          words.push(word);
        }
      }
    }
    // otherwise (char is a letter)
    else if (text[i].match(/[A-Za-z]/)) {
      if (word.match(/[^\s]/g)) { // if word contains no spaces
        if (word === '') {
          word = text[i].toUpperCase();
        } else {
          word = word + text[i].toLowerCase();
        }
        if (i === text.length - 1) {
          words.push(word);
        }
      } else {
        words.push(word);
        word = text[i].toUpperCase();
      }
    }
  }

  return words.join('');

  // Method 1

  // let words: string[] = text.split(' ');

  // let newWords: string[] = words.map((word: string) => {
  //   let newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  //   return newWord;
  // })

  // return newWords.join(' ');
}

// Turn input into an array of strings for each sentence, separated by a period
// Iterate over array of sentences, for each sentence
//   Lowercase all letters, but capitalize the first non-space letter
// Join array back into a string
// Return joined string

// Finished function: subsequent punctuation right after another, like "??" or ".!",
//   removes all but the first punctuation mark.
function sentenceCap(text: string): string {
  // console.log('in sentenceCap')
  if (!text) {
    return text;
  }

  let punctuation = text.match(/[.!?]/g);

  let sentences: string[] = text.split(/[.!?]/);

  let newSentences: string[] = sentences.map((sentence, i) => {
    if (sentence.trim() === '') {
      return sentence
    }
    let sentenceEnd: string;
    let firstNonSpaceCharacter = sentence[sentence.search(/\S/)];
    let firstCharIndex = sentence.indexOf(firstNonSpaceCharacter);
    let restOfSentence = sentence.slice(firstCharIndex + 1).toLowerCase();
    let leadingSpaces = firstCharIndex > 0 ? ' '.repeat(firstCharIndex) : '';

    if (punctuation === null) {
      sentenceEnd = '';
    } else {
      sentenceEnd = punctuation[i];
    }

    let cappedSentence = leadingSpaces
      + firstNonSpaceCharacter.toUpperCase()
      + restOfSentence
      + (sentenceEnd ? sentenceEnd : '');

    return cappedSentence;
  })

  return newSentences.join('');
}

// export {sentenceCap, capEveryWord, capEveryOtherSecond, , allLowerCase, allUpperCase}
export {allUpperCase, allLowerCase, capEveryOtherFirst, capEveryOtherSecond, capEveryWord, sentenceCap};

