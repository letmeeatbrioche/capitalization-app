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
    if (chars[i] === ' ') {
      continue
    }

    if (prevOperation === 'upper' || i === 0) {
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

  let words: string[] = text.split(' ');

  let newWords: string[] = words.map((word: string) => {
    let newWord: string = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return newWord;
  })

  return newWords.join(' ');
}

// Turn input into an array of strings for each sentence, separated by a period
// Iterate over array of sentences, for each sentence
//   Lowercase all letters, but capitalize the first non-space letter
// Join array back into a string
// Return joined string
function sentenceCap(text: string): string {
  // console.log('in sentenceCap')
  if (!text) {
    return text;
  }

  let sentences = text.split('.');

  let newSentences = sentences.map((sentence) => {
    let firstNonSpaceCharacter = sentence[sentence.search(/\S/)];
    let firstCharIndex = sentence.indexOf(firstNonSpaceCharacter);
    let restOfSentence = sentence.slice(firstCharIndex + 1).toLowerCase();
    let cappedSentence = firstNonSpaceCharacter.toUpperCase() + restOfSentence;
    return cappedSentence;
  })

  return newSentences.join('. ');
}

// export {sentenceCap, capEveryWord, capEveryOtherSecond, , allLowerCase, allUpperCase}
export {allUpperCase, allLowerCase, capEveryOtherFirst, capEveryOtherSecond, capEveryWord, sentenceCap};

