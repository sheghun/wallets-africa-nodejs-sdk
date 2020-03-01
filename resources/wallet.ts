/**
 *  All wallet self functionality and methods
 * @class Self
 */
class Wallet {
    /*
        Api key
     */
    static key = '';

    static endpoint = '/wallet';

    /**
     * Performs a debit on a sub wallet
     * @param {dc} t
     */
    static async debit(options: dc) {}

    /**
     * Performs a credit on a sub wallet
     * @param {dc} t
     */
    static async credit(options: dc) {}

    /**
     * Creates a new customer
     * @params {create} t
     */
    static async create(options: create) {}

    /**
     * Verifies new customer
     * @params {verify} t
     */
    static async verify(options: {phone: string; otp: string}) {}

    /**
     * Generate
     * @params {create & {currency: string}} t
     */
    static async generate(options: create & {currency: string}) {}

    /**
     * Generates account number
     * @params {string} phone - phone to generate account number against
     */
    static async generateAccountNumber(phone: string) {}

    /**
     * Retrieves account number
     */
    static async retrieveAccountNumber(phone: string) {}

    /**
     * Sets password against a phone number
     */
    static async setPassword(options: {phone: string; password: string}) {}

    /**
     * Sets pin
     */
    static async setPin(options: {phone: string; pin: string}) {}

    /**
     * Returns transaction
     */
    static async transactions(options: TransactionOptionsType & {transactionPin: string}) {}

    /**
     * Verifies BVN
     */
    static async verifyBvn(options: {dateOfBirth: string; bvn: string; phoneNumber: string}) {}

    /**
     * Gets a user
     */
    static async getUser(phone: string) {}

    /**
     * Returns wallet balance
     */
    static async getBalance(phone: string) {}
}

export default Wallet;

interface dc {
    transactionReference: string;
    amount: number;
    phone: string;
}

interface create {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    dateOfBirth: string | Date;
}
