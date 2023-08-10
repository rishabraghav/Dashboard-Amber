function numericalToAlphabeticalMonth(numericalMonth) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    if (numericalMonth >= 1 && numericalMonth <= 12) {
      return months[numericalMonth - 1];
    } else {
      return 'Invalid Month';
    }
  }

  export default numericalToAlphabeticalMonth;