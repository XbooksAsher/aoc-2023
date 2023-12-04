fetch('input.txt')
  .then((response) => response.text())
  .then((data) => {
    // Split the data into an array of strings
    const lines = data.split('\n');

    // now find the first & last digit of each, I'll then use reduce once I have them all for the final sum

    const findFirstAndLastDigit = (str) => {
      const firstDigit = str.match(/\d/);

      const lastDigit = str.match(/\d(?=[^\d]*$)/);

      return firstDigit && lastDigit ? firstDigit[0] + lastDigit[0] : null;
    };

    const combinedDigits = lines.map((line) => findFirstAndLastDigit(line));

    const finalSum = combinedDigits.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);

    console.log('finalSum :', finalSum);
  })
  .catch((error) => console.error('Error:', error));
