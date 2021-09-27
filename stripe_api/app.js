const stripe = require("stripe")("sk_test_mEAzBvDNfGDxoy11kaG1YnKU00DyzEvh14");

(async () => {
  /*const intent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "cad",
    payment_method_types: ["card"],
    payment_method: "src_1JcsP4KNUWwQibVPbtE88ExS",
    customer: "cus_KHHghY3mPsR7DE",
  });

  console.log(intent);

  const paymentIntent = await stripe.paymentIntents.confirm(intent.id, {
    payment_method: intent.payment_method,
  });

  console.log(paymentIntent); */

  const charge = await stripe.charges.create({
    amount: 2000,
    currency: "cad",
    source: "src_1JcjD6KNUWwQibVP52tqMk1j",
    description: "testing",
    customer: "cus_KHHghY3mPsR7DE",
  });

  console.log(charge);
})();
