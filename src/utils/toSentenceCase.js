export default function toSentenceCase(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (str.length === 0) {
      return '';
    }
  
    const firstChar = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1).toLowerCase();
  
    return `${firstChar}${restOfString}`;
  }
  
  const sentence = 'hello, world!';
  const sentenceCase = toSentenceCase(sentence);
  console.log(sentenceCase);
  