function printAllCookies() {
  document.cookie.split(';').forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    console.log(`${name}: ${value}`);
  });
}
function readCookies() {
  printAllCookies();
  // Accessing the cookie string
  // document.cookie only provides access to cookies for the current domain. 
  // If you set a cookie with a specific path or domain, you will need to ensure that the client - side script accessing it is on a page within that path or domain.
  // Additionally, be mindful of security considerations when accessing and using cookies in client - side JavaScript
  const cookieString = document.cookie;
  // Splitting the cookie string into individual cookies
  const cookies = cookieString.split(';');
  // Loop through the cookies to find the one you're interested in
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim(); // Trim any leading or trailing whitespace
    // Check if this cookie is the one you're looking for
    if (cookie.startsWith('__Secure_dyid_server=')) {
      // Extract the value of the cookie
      let cookieValue = cookie.substring('__Secure_dyid_server='.length);
      // Use the cookie value as needed
      console.log('Value of __Secure_dyid_server:', cookieValue);
      break; // Exit the loop once you've found the cookie
    }
  }
}

function testNotEval() {
  console.log('console.log from other domain not in eval');
}
testNotEval();
const code = 'function testEval() { console.log(\'Another console.log from other domain using eval\');} testEval();';
eval(code);

readCookies();
