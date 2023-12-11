import { TProduct } from "../redux/services/api.types";

export const getDiscount = (
  rawPrice: string,
  discount: string | null,
): number => {
  const numPrice = parseInt(rawPrice.replace(" ", ""));

  const numDiscount = discount ? parseInt(discount) / 100 : 0;

  return numPrice - numPrice * numDiscount;
};

export const getDiscountPrice = (price: string, discount: string | null) => {
  return getDiscount(price, discount).toLocaleString("ru") + " ₽";
};

export const calculateTotalPrices = (productList: TProduct[]) => {
  const rawSum = productList.reduce((acc, current) => {
    acc += parseInt(current.price.replace(" ", ""));
    return acc;
  }, 0);
  const discountSum = productList.reduce((acc, current) => {
    const discountPrice = getDiscount(current.price, current.discount);
    acc += discountPrice;
    return acc;
  }, 0);
  const totalDiscount = discountSum - rawSum;

  const totalRawPrice = getDiscountPrice(rawSum.toString(), null);
  const totalDiscountNumber = getDiscountPrice(totalDiscount.toString(), null);
  const totalDiscountPrice = getDiscountPrice(discountSum.toString(), null);

  return { totalRawPrice, totalDiscountNumber, totalDiscountPrice };
};
