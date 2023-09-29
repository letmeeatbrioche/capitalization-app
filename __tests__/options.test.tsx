import { experimental_useEffectEvent } from 'react';
import * as capOptions from '@/options';

test('Capitalizes: ALL CAPS', () => {
  expect(capOptions.allUpperCase('this is a string')).toBe('THIS IS A STRING');
});

test('Capitalizes: all lowercase', () => {
  expect(capOptions.allLowerCase('THIS IS A STRING')).toBe('this is a string');
});

test('Capitalizes: Every other letter (capitalizing the first)', () => {
  expect(capOptions.capEveryOtherFirst('this is a string')).toBe('ThIs Is A sTrInG');
});

test('Capitalizes: Every other letter (NOT capitalizing the first)', () => {
  expect(capOptions.capEveryOtherSecond('this is a string')).toBe('tHiS iS a StRiNg');
});

test('Capitalizes: Every Word', () => {
  expect(capOptions.capEveryWord('this is a string')).toBe('This Is A String');
});

test('Capitalizes: Sentence capitalization', () => {
  expect(capOptions.sentenceCap('lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque. et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?')).toBe('Lorem ipsum dolor sit amet. Ex amet dicta in enim officia est galisum atque. Et veniam consequuntur vel rerum asperiores aut consectetur error. Quo esse amet et veniam animi ab neque eius eum itaque ratione?');
});