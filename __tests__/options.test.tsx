import * as capOptions from '@/options';

test('Capitalizes: ALL CAPS', () => {
  expect(capOptions.allUpperCase('this is a string')).toBe('THIS IS A STRING');
  expect(capOptions.allUpperCase('   this is   a string   '  )).toBe('   THIS IS   A STRING   '  );
  expect(capOptions.allUpperCase('   THIS IS A    STRING   '  )).toBe('   THIS IS A    STRING   '  );

  expect(capOptions.allUpperCase('lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque. et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?'
  )).toBe('LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE. ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR. QUO ESSE AMET ET VENIAM ANIMI AB NEQUE EIUS EUM ITAQUE RATIONE?');

  expect(capOptions.allUpperCase('   lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque!   et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?   '
  )).toBe('   LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE!   ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR. QUO ESSE AMET ET VENIAM ANIMI AB NEQUE EIUS EUM ITAQUE RATIONE?   ');
});

test('Capitalizes: all lowercase', () => {
  expect(capOptions.allLowerCase('THIS IS A STRING')).toBe('this is a string');
  expect(capOptions.allLowerCase('   THIS IS   A STRING   '  )).toBe('   this is   a string   '  );
  expect(capOptions.allLowerCase('   this is a    string   '  )).toBe('   this is a    string   '  );

  expect(capOptions.allLowerCase('LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE. ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR. QUO ESSE AMET ET VENIAM ANIMI AB NEQUE EIUS EUM ITAQUE RATIONE?'
  )).toBe('lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque. et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?');

  expect(capOptions.allLowerCase('   Lorem ipsum doloR sit amet. ex amet Dicta IN enim officia est galisum atque!   et veniam consequuntur vel RERUM asperiores AUt consectetur error. qUo esse amet et veniAm animi ab neque eius eum itaque ratione?   '
  )).toBe('   lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque!   et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?   ');
});

test('Capitalizes: Every other letter (capitalizing the first)', () => {
  expect(capOptions.capEveryOtherFirst('this is a string')).toBe('ThIs Is A sTrInG');
  expect(capOptions.capEveryOtherFirst('   THIS IS   A STRING   ')).toBe('   ThIs Is   A sTrInG   ');

  expect(capOptions.capEveryOtherFirst('LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE. ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR. QUO ESSE AMET ET VENIAM ANIMI AB NEQUE EIUS EUM ITAQUE RATIONE?'
  )).toBe('LoReM iPsUm DoLoR sIt AmEt. Ex AmEt DiCtA iN eNiM oFfIcIa EsT gAlIsUm AtQuE. eT vEnIaM cOnSeQuUnTuR vEl ReRuM aSpErIoReS aUt CoNsEcTeTuR eRrOr. QuO eSsE aMeT eT vEnIaM aNiMi Ab NeQuE eIuS eUm ItAqUe RaTiOnE?');

  expect(capOptions.capEveryOtherFirst('   Lorem ipsum doloR sit amet. ex amet Dicta IN enim officia est galisum atque!   et veniam consequuntur vel RERUM asperiores AUt consectetur error. qUo esse amet et veniAm animi ab neque eius eum itaque ratione?   '
  )).toBe('   LoReM iPsUm DoLoR sIt AmEt. Ex AmEt DiCtA iN eNiM oFfIcIa EsT gAlIsUm AtQuE!   eT vEnIaM cOnSeQuUnTuR vEl ReRuM aSpErIoReS aUt CoNsEcTeTuR eRrOr. QuO eSsE aMeT eT vEnIaM aNiMi Ab NeQuE eIuS eUm ItAqUe RaTiOnE?   ');
});

test('Capitalizes: Every other letter (NOT capitalizing the first)', () => {
  expect(capOptions.capEveryOtherSecond('this is a string')).toBe('tHiS iS a StRiNg');
  expect(capOptions.capEveryOtherSecond('   THIS IS   A STRING   ')).toBe('   tHiS iS   a StRiNg   ');

  expect(capOptions.capEveryOtherSecond('LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE. ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR?'
  )).toBe('lOrEm IpSuM dOlOr SiT aMeT. eX aMeT dIcTa In EnIm OfFiCiA eSt GaLiSuM aTqUe. Et VeNiAm CoNsEqUuNtUr VeL rErUm AsPeRiOrEs AuT cOnSeCtEtUr ErRoR?');

  expect(capOptions.capEveryOtherSecond('   Lorem ipsum doloR sit amet. ex amet Dicta IN enim officia est galisum atque!   et veniam consequuntur vel RERUM asperiores AUt consectetur error?   '
  )).toBe('   lOrEm IpSuM dOlOr SiT aMeT. eX aMeT dIcTa In EnIm OfFiCiA eSt GaLiSuM aTqUe!   Et VeNiAm CoNsEqUuNtUr VeL rErUm AsPeRiOrEs AuT cOnSeCtEtUr ErRoR?   ');
});

test('Capitalizes: The first letter of every word', () => {
  expect(capOptions.capEveryWord('this is a string')).toBe('This Is A String');
  expect(capOptions.capEveryWord('   THIS IS A    STRING   ')).toBe('   This Is A    String   ');

  expect(capOptions.capEveryWord('LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE. ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR?'
  )).toBe('Lorem Ipsum Dolor Sit Amet. Ex Amet Dicta In Enim Officia Est Galisum Atque. Et Veniam Consequuntur Vel Rerum Asperiores Aut Consectetur Error?');

  expect(capOptions.capEveryWord('   Lorem ipsum doloR sit amet. ex amet Dicta IN enim officia est galisum atque!   et veniam consequuntur vel RERUM asperiores AUt consectetur error?   '
  )).toBe('   Lorem Ipsum Dolor Sit Amet. Ex Amet Dicta In Enim Officia Est Galisum Atque!   Et Veniam Consequuntur Vel Rerum Asperiores Aut Consectetur Error?   ');
});

test('Capitalizes: Sentence capitalization', () => {
  expect(capOptions.sentenceCap('this is a string')).toBe('This is a string');
  expect(capOptions.sentenceCap('   THIS IS A    STRING   ')).toBe('   This is a    string   ');

  // all caps, various punctuation, and extra spaces
  expect(capOptions.sentenceCap('   LOREM IPSUM DOLOR SIT AMET. EX AMET DICTA IN ENIM OFFICIA EST GALISUM ATQUE!   ET VENIAM CONSEQUUNTUR VEL RERUM ASPERIORES AUT CONSECTETUR ERROR. QUO ESSE AMET ET VENIAM ANIMI AB NEQUE EIUS EUM ITAQUE RATIONE?   '
  )).toBe('   Lorem ipsum dolor sit amet. Ex amet dicta in enim officia est galisum atque!   Et veniam consequuntur vel rerum asperiores aut consectetur error. Quo esse amet et veniam animi ab neque eius eum itaque ratione?   ');

  // all lowercase, various punctuation, and extra spaces
  expect(capOptions.sentenceCap('   lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque!   et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione   ?   '
  )).toBe('   Lorem ipsum dolor sit amet. Ex amet dicta in enim officia est galisum atque!   Et veniam consequuntur vel rerum asperiores aut consectetur error. Quo esse amet et veniam animi ab neque eius eum itaque ratione   ?   ');

  // random caps, various punctuation, and extra spaces
  expect(capOptions.sentenceCap('   Lorem ipsum doloR sit amet? ex amet Dicta IN enim officia est galisum atque!   et veniam consequuntur vel RERUM asperiores AUt consectetur error. qUo esse amet et veniAm animi ab neque eius eum itaque ratione.   '
  )).toBe('   Lorem ipsum dolor sit amet? Ex amet dicta in enim officia est galisum atque!   Et veniam consequuntur vel rerum asperiores aut consectetur error. Quo esse amet et veniam animi ab neque eius eum itaque ratione.   ');

  // all lowercase and all periods
  expect(capOptions.sentenceCap('lorem ipsum dolor sit amet. ex amet dicta in enim officia est galisum atque. et veniam consequuntur vel rerum asperiores aut consectetur error. quo esse amet et veniam animi ab neque eius eum itaque ratione?')).toBe('Lorem ipsum dolor sit amet. Ex amet dicta in enim officia est galisum atque. Et veniam consequuntur vel rerum asperiores aut consectetur error. Quo esse amet et veniam animi ab neque eius eum itaque ratione?');
});