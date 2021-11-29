//Helper functions

module.exports = {
  format_height: (height) => {
    let feet = Math.floor(height / 12);
    let inches = height - feet * 12;
    return feet + "'" + inches;
  },
};
