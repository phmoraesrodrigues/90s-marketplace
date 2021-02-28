export const currencyFormat = (number, region = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(region, {
    style: "currency",
    currency,
  }).format(number);
};
