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
    }) {}

    /**
     * Performs a credit on a sub wallet
     */
    static async credit(options: {
        transactionReference: string;
        amount: number;
        phoneNumber: string;
    }) {}

    /**
     * Creates a new customer
     */
    static async create(options: CreateOptions) {}

    /**
     * Verifies new customer
     */
    static async verify(options: {phoneNumber: string; otp: string}) {}

    /**
     * Generate
     */
    static async generate(options: CreateOptions & {currency: string}) {}

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
    static async setPassword(options: {phoneNumber: string; password: string}) {}

    /**
     * Sets pin
     */
    static async setPin(options: {phoneNumber: string; pin: string}) {}

    /**
     * Returns transaction
     */
    static async transactions(options: TransactionOptions & {transactionPin: string}) {}

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
