const createPhoneNumber = (arr) => {
  let countryCode = '+234';
  let str = arr.join('');

  return `${countryCode} ${str.substring(0, 3)} ${str.substring(
    3,
    6
  )} ${str.substring(6)}`;
};
console.log(createPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 1]));
createPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 1]);
