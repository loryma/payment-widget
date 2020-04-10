export function checkLuhn(value) {
  let sum = 0;
  let shouldDouble = false;

  for (let i = value.length - 1; i >= 0; i--) {
    let digit = parseInt(value.charAt(i));

    if (shouldDouble) {
      if ((digit *= 2) > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
}

export function validateExpDate(mm, yy) {
  if (!mm || !yy || mm.length !== 2 || yy.length !== 2) return false;

  const expMonth = Number(mm);
  const expYear = Number("20" + yy);
  const expDate = new Date(expYear, expMonth - 1);

  if (expMonth > 12) return false;

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const todayDate = new Date(year, month);

  if (todayDate < expDate) {
    return true;
  }
  return false;
}

export const unmaskCardNumber = (value) => value.replace(/\D+/g, "");
export const unmaskCardDate = (value) => value.split(" / ");

export const CARD_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const EXPIRATION_MASK = [/\d/, /\d/, " ", "/", " ", /\d/, /\d/];
