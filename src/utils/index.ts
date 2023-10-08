function allUpperCase(text: string): string {
  if (!text) {
    return text;
  }
  return text.toUpperCase();
}

function allLowerCase(text: string): string {
  if (!text) {
    return text;
  }
  return text.toLowerCase();
}

function capEveryOtherFirst(text: string): string {
  if (!text) {
    return text;
  }

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
}

function sentenceCap(text: string): string {
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

export {allUpperCase, allLowerCase, capEveryOtherFirst, capEveryOtherSecond, capEveryWord, sentenceCap};

