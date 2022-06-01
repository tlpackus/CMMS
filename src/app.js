import './app.css';
import Copper from 'copper-sdk';
const sdk = Copper.init();


async function handleGetContext() {
  const { context } = await sdk.getContext();
  const dataJsonObject = context.toJSON();
  const dataJavaScriptObject = JSON.parse(dataJsonObject);
  const customerEmails = dataJavaScriptObject.emails
  const customerFirstEmail = customerEmails[0].email;

  // const emailJsonObject = dataJavaScriptObject.emails;
  // const emailJavaScriptObject = JSON.parse(emailJsonObject);

  // document.getElementById('contextData').innerHTML = dataJsonObject;
  document.getElementById('customerEmailField').innerHTML = customerFirstEmail;
}

// function handleGetCustomerEmail(context) {
//   console.log(context);
//   document.getElementById('customerEmailField').innerHTML = context.email;
// }

// function handleClearContext() {
//   document.getElementById('contextData').innerHTML = ''
// }

document.getElementById('btnGetContext').addEventListener('click', handleGetContext);
// document.getElementById('btnGetCustomerEmail').addEventListener('click', handleGetCustomerEmail(handleGetContext()));

// document.getElementById('btnClearContext').addEventListener('click', handleClearContext)
