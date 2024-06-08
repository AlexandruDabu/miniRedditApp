const shortenNumber = (num, digits) => {
    const units = ['k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  
    for (let i = units.length - 1; i >= 0; i -= 1) {
      const decimal = 1000 ** (i + 1);
  
      if (num <= -decimal || num >= decimal) {
        return +(num / decimal).toFixed(digits) + units[i];
      }
    }
  
    return num;
  };
  
export default shortenNumber;
  