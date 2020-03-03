import axios from 'axios';

/**
 *  All wallet functionality and methods
 * @class wallet
 */
class Wallet {
    /*
        Api key
     */
    static secretKey = '';

    static endpoint = '/wallet';

    /**
     * Performs a debit on a sub wallet
     */
    static async debit(options: {
        transactionReference: string;
        amount: number;
        phoneNumber: string;
    }) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/debit`;

        return axios.post(url, body);
    }

    /**
     * Performs a credit on a sub wallet
     */
    static async credit(options: {
        transactionReference: string;
        amount: number;
        phoneNumber: string;
    }) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/credit`;

        return axios.post(url, body);
    }

    /**
     * Creates a new customer
     */
    static async create(options: CreateOptions) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/create`;

        return axios.post(url, body);
    }

    /**
     * Verifies new customer
     */
    static async verify(options: {phoneNumber: string; otp: string}) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/verify`;

        return axios.post(url, body);
    }

    /**
     * Generate
     */
    static async generate(options: CreateOptions & {currency?: string}) {
        if (!('currency' in options)) {
            options.currency = 'NGN';
        }
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/generate`;

        return axios.post(url, body);
    }

    /**
     * Generates account number
     * @params {string} phone - phone to generate account number against
     */
    static async generateAccountNumber(phone: string) {
        const body = {phoneNumber: phone, SecretKey: this.secretKey};
        const url = `${this.endpoint}/generateaccountnumber`;

        return axios.post(url, body);
    }

    /**
     * Retrieves account number
     */
    static async retrieveAccountNumber(phone: string) {
        const body = {phoneNumber: phone, SecretKey: this.secretKey};
        const url = `${this.endpoint}/nuban`;

        return axios.post(url, body);
    }

    /**
     * Sets password against a phone number
     */
    static async setPassword(options: {phoneNumber: string; password: string}) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/password`;

        return axios.post(url, body);
    }

    /**
     * Sets pin
     */
    static async setPin(options: {phoneNumber: string; transactionPin: string}) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/pin`;

        return axios.post(url, body);
    }

    /**
     * Returns transaction
     */
    static async transactions(options: TransactionOptions & {transactionPin: string}) {
        options.currency = options.currency ? options.currency : 'NGN';
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/transactions`;

        return axios.post(url, body);
    }

    /**
     * Verifies BVN
     */
    static async verifyBvn(options: {dateOfBirth: string; bvn: string; phoneNumber: string}) {
        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/verifybvn`;

        return axios.post(url, body);
    }

    /**
     * Gets a user
     */
    static async getUser(phone: string) {
        const body = {phoneNumber: phone, SecretKey: this.secretKey};
        const url = `${this.endpoint}/getuser`;

        return axios.post(url, body);
    }

    /**
     * Returns wallet balance
     */
    static async getBalance(options: {
        phoneNumber: string;
        transactionPin: string;
        currency?: currencyType;
    }) {
        if (!('currency' in options)) {
            options.currency = 'NGN';
        }

        const body = {...options, SecretKey: this.secretKey};
        const url = `${this.endpoint}/balance`;

        return axios.post(url, body);
    }
}

export default Wallet;
