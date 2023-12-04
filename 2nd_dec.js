fetch('input.txt')
  .then((response) => response.text())
  .then((data) => {
    console.log('data :', data);

    // mapping for 1-9
    const map = {
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
    };

    let result = '';
    let tempWord = '';

    const replaceWordsWithNumbers = (str) => {};

    const findFirstAndLastDigit = (str) => {
      const convertedWords = replaceWordsWithNumbers(str);

      const firstDigit = convertedWords.match(/\d/);

      const lastDigit = convertedWords.match(/\d(?=[^\d]*$)/);

      return firstDigit && lastDigit ? firstDigit[0] + lastDigit[0] : null;
    };

    // Split the data into an array of strings
    const lines = data.split('\n');

    const combinedDigits = lines.map((line) => findFirstAndLastDigit(line));
    console.log('combinedDigits :', combinedDigits);
  })
  .catch((error) => console.error('Error:', error));
