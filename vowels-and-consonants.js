const vowelArray = ['a', 'e', 'i', 'o', 'u'];

export const countVowelsAndConsonants = (sentence) => {
  let vowelCount = 0;
  let consonantCount = 0;

  sentence.split("").forEach(letter => {
    letter === " " || (vowelArray.includes(letter.toLowerCase()) ? vowelCount++ : consonantCount++)
  });

  console.log("Vowels count:", vowelCount, "\nConsonant count:", consonantCount);
}