const getTotals = (cart) => {
  let newTotal = 0;
  let newItemAmount = 0;
  cart.map((item) => {
    newItemAmount += item.amount;
    newTotal += item.amount * Number(item.price);
  });
  return { newTotal, newItemAmount };
};
export default getTotals;
