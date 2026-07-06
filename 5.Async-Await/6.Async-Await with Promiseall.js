// Sequential execution:

let user = await getUser();

let orders = await getOrders();

let payment = await getPayment();

// Parallel execution:

let [user, orders, payment] = await Promise.all([
  getUser(),

  getOrders(),

  getPayment(),
]);

console.log(user);

console.log(orders);

console.log(payment);
