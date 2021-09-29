const stripe = require("stripe")("sk_test_mEAzBvDNfGDxoy11kaG1YnKU00DyzEvh14");

(async() => {
	//configure the invoice 
	/*stripe.invoiceItems.create({
		amount: 1000,
		currency: "cad",
		customer: "cus_KHHghY3mPsR7DE",
		description: "invoice setup with api"
	});*/ 

	//prepare the draft --> from invoiceItems to "draft" stages
	/*const invoice = await stripe.invoices.create({
		customer: "cus_KHHghY3mPsR7DE"
	});

	console.log(invoice);*/

	//update a invoice
	/*const updateInvoice = await stripe.invoices.update('in_1Jei5OKNUWwQibVPh1SugMPm',{
		collection_method: "send_invoice",
		days_until_due: 30,
	});

	console.log(updateInvoice);*/

	//send a invoice manual payment
	/*const invoiceSend = await stripe.invoices.sendInvoice('in_1Jei5OKNUWwQibVPh1SugMPm');

	console.log(invoiceSend);*/

	
})();
