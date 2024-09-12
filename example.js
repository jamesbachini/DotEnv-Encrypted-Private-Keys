const { ethers } = require("ethers");
const CryptoJS = require("crypto-js");
const readline = require('readline');
require("dotenv").config();

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const decryptKey = async () => {
    if (!process.env.ENCRYPTED_PRIVATE_KEY) {
      console.log('No ENCRYPTED_PRIVATE_KEY found in .env file');
      return;
    }
    rl.question('Enter a password or pass phrase: ', (passString) => {
        const privateKey = CryptoJS.AES.decrypt(process.env.ENCRYPTED_PRIVATE_KEY, passString).toString(CryptoJS.enc.Utf8);
        const wallet = new ethers.Wallet(privateKey);
        console.log(`Wallet connected: ${wallet.address}`);
        process.exit();
    });
}

const encryptKey = async () => {
    rl.question('Enter your private key: ', (privateKey) => {
        rl.question('Enter a password or pass phrase: ', (passString) => {
            const cipherText = CryptoJS.AES.encrypt(privateKey, passString).toString();
            const wallet = new ethers.Wallet(privateKey);
            console.log(`Wallet Loaded: ${wallet.address}`);
            console.log(`ENCRYPTED_PRIVATE_KEY=${cipherText}`);
            process.exit();
        });
    });
}

const encryptNewKey = async () => {
    const wallet = ethers.Wallet.createRandom();
    rl.question('Enter a password or pass phrase: ', (passString) => {
        const cipherText = CryptoJS.AES.encrypt(wallet.privateKey, passString).toString();
        console.log(`New Wallet Created: ${wallet.address}`);
        console.log(`ENCRYPTED_PRIVATE_KEY=${cipherText}`);
        process.exit();      
    });
}

const main = async () => {
    console.log('Welcome to the .env key encryption tool.');
    console.log('What do you want to do?');
    console.log('1. Encrypt a new key');
    console.log('2. Encrypt an existing key');
    console.log('3. Test a key in .env');
    rl.question('Enter an option [1-3]: ', (option) => {
        if (option == 1) encryptNewKey();
        if (option == 2) encryptKey();
        if (option == 3) decryptKey();       
    });
}

main();