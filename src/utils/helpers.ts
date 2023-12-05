export const getDiscount = (
  rowPrice: string,
  discount: string | null,
): number => {
  const numPrice = parseInt(rowPrice.replace(" ", ""));

  const numDiscount = discount ? parseInt(discount) / 100 : 0;

  return numPrice - numPrice * numDiscount;
};

export const getDiscountPrice = (price: string, discount: string | null) => {
  return getDiscount(price, discount).toLocaleString("ru") + " ₽";
};
