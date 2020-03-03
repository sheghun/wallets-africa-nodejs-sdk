# Wallet Africa Nodejs SDK

Nodejs API wrapper for [Wallets Africa](https://wallets.africa/)

[API DOCS](https://documenter.getpostman.com/view/10058163/SWLk4RPL?version=latest#86ebd12e-c0e7-4529-86ea-9ed5f6993272)

```
npm install wallets-africa
```

### Usage

```js
const WalletAfrica = require('wallets-africa');

const walletAfrica = new WalletAfrica({
    secretKey: process.env.SECRET_KEY,
    publicKey: process.env.PUBLIC_KEY,
    sandbox: true, // For sandbox mode defaults to false
});

try {
    // Checks wallet balance, takes an argument (currency) and responds.
    const res = await walletAfrica.self.checkBalance();
    if (res.status === 200) {
        // Successful
    }
} catch (err) {
    if (!err.response) {
        // No response from the server
        // Bad network
    } else {
        //  Response was returned from the server
        // ...
    }
}
```

##### Note

All calls to the api under hood uses axios, so all methods returns an axios response.

All files are compiled to JavaScript and only the necessary files are published

### Resources

-   Self
-   Wallet
-   Bank
-   Airtime
-   Account

##### Contributing

-   You can contribute by extending the README file to contain more examples and explanations of how to use the package

    -   Please follow the eslint and prettier rules to ensure consistent code style

##### Tests

To run tests you need to create a sandbox account you can do that [here](https://dev.wallets.africa/) after which you can add your public and private test keys to package.json
