# Ethereum Private Key Encryption

This Node.js tool helps you securely encrypt and manage Ethereum private keys by utilizing the Ethers.js library for wallet management and CryptoJS for encryption. The encrypted private key is stored in an `.env` file, which allows for better security practices when building using hot wallets.

## Features
- **Encrypt New Key**: Generate a new Ethereum wallet and securely encrypt its private key.
- **Encrypt Existing Key**: Encrypt an already existing private key with a passphrase.
- **Decrypt Key**: Decrypt and load a private key from the `.env` file, connect the wallet, and display the associated Ethereum address.

## Prerequisites

Before using this tool, ensure that you have [Node.js](https://nodejs.org/) installed.

## Installation

1. Clone the repository or copy the script into your project.
2. Install the required dependencies:

```bash
npm install ethers crypto-js dotenv readline
```

3. Run the example script:

```bash
node example.js
```

## Options (in example script)

### Encrypt a New Key

This will generate a random wallet and encrypt the private key using your pass phrase.

- Select option **1**.
- Enter a passphrase to encrypt the private key.
- The tool will generate a new wallet and display its address.
- Copy the `ENCRYPTED_PRIVATE_KEY=<encrypted_key>` to your `.env` file for future use.

### Encrypt an Existing Key

If you already have an Ethereum private key and you want to securely encrypt it:

- Select option **2**.
- Enter your private key.
- Enter a passphrase to encrypt the private key.
- The tool will display the encrypted private key. Add it to your `.env` file.

### Decrypt a Key

To decrypt and connect a wallet using the encrypted private key stored in your `.env` file:

- Select option **3**.
- Enter the passphrase you used to encrypt the private key.
- The tool will decrypt the private key and display the wallet address connected to the private key.

## `.env` Security

Ensure that your `.env` file is added to your `.gitignore` file to prevent it from being exposed in public repositories:

```bash
echo ".env" >> .gitignore
```

## Example `.env` File

```bash
ENCRYPTED_PRIVATE_KEY=U2FsdGVkX19F0bnyrH4F7QpzIWXC1wSxM4NHiuq7jxITivwfcNddGLyRaxzLR6F0wauvA2a2/XEcr5iB0XzvlZ/6fBb/ZdN8g0/jXUWRQTWNA3qkRvYqanF2KhcW8/UW
```

Pass phrase for this wallet in .env-sample is "4251b2abdfd2a786bf"

Wallet address: 0x5fF44cd180FE942846e777E0Ecd7f3F39504FE79

Don't use this wallet obviously, it's just for demo purposes.

## Integration with Web3 Frameworks

This tool can be integrated into **Hardhat**, **Ethers**, or any web3 project by using the decrypted private key to sign transactions, deploy contracts, or interact with the blockchain.

For example, in Hardhat, you could load the decrypted key using `ethers` like this:

```javascript
require("dotenv").config();
const { ethers } = require("ethers");

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, ethers.provider);
```

## Notes

- **Security**: Always store your `.env` file securely and avoid sharing it in public repositories. For production use, consider more robust key management solutions such as hardware wallets or cloud based key management services.

- **Passphrase**: Make sure to use a strong passphrase when encrypting your private key to enhance security. If someone found your encrypted private key they could try and brute force the pass phrase.

## License

This project is licensed under the MIT License.

## Links

- [Website](https://jamesbachini.com)
- [YouTube](https://www.youtube.com/c/JamesBachini?sub_confirmation=1)
- [Substack](https://bachini.substack.com)
- [Podcast](https://podcasters.spotify.com/pod/show/jamesbachini)
- [Spotify](https://open.spotify.com/show/2N0D9nvdxoe9rY3jxE4nOZ)
- [Twitter](https://twitter.com/james_bachini)
- [LinkedIn](https://www.linkedin.com/in/james-bachini/)
- [GitHub](https://github.com/jamesbachini)
