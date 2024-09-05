export function calculateDiscountedPrice(price, discount) {
  const discountAmount = price * (discount / 100);
  const discountedPrice = price - discountAmount;
  return Math.round(discountedPrice); // Bulatkan ke angka terdekat
}
