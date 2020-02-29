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
    static async debit(t: dc) {}

    /**
     * Performs a credit on a sub wallet
     * @param {dc} t
     */
    static async credit(t: dc) {}

    /**
     * Creates a new customer
     * @params {create} t
     */
    static async create(t: create) {}

    /**
     * Verifies new customer
     * @params {verify} t
     */
    static async verify(t: verify) {}

    /**
     * Generate
     * @params {create & {currency: string}} t
     */
    static async generate(t: create & {currency: string}) {}

    /**
     * Generates account Number
     * @params {{phoneNumber: string, secretKey: string}}
     */
    static async generateAccountNumber(t: {phoneNumber: string; secretKey: string}) {}
}

export default Wallet;

interface dc {
    transactionReference: string;
    amount: number;
    phoneNumber: string;
}

interface create {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    dateOfBirth: string | Date;
}

interface verify {
    phoneNumber: string;
    otp: string;
    secretKey: string;
}
