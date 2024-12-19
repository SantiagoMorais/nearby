export const generateCouponCode = (length: number): string => {
  const pattern: RegExp = /^[A-Z0-9]$/;
  let coupon = "";

  while (coupon.length < length) {
    const randomChar = String.fromCharCode(Math.floor(Math.random() * 127));
    if (pattern.test(randomChar)) {
      coupon += randomChar;
    }
  }

  return coupon;
};
