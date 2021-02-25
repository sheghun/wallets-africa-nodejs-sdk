import axios from 'axios';

/**
 * @class Bank
 * All Bank functionality and methods based on api
 * {@link https://https://documenter.getpostman.com/view/10058163/SWLk4RPL?version=latest#90e5b45a-9ae1-4eaa-85ae-9aa569835bdb View Api Docs}
 */
class Bank {
    /*
        Api keys
     */
    static secretKey = '';

    static endpoint = 'transfers/bank';

    /*
        Returns bank
     */

    static async bankDetails(transRef: string) {
        const body = {TransactionReference: transRef, SecretKey: this.secretKey, currency: 'NGN'};
        const url = `${this.endpoint}/details`;

        return axios.post(url, body);
    }

    /*
        Transfer from wallet to bank account supplied
      */
    static async bankAccountTransfer(options: BankTransOptions) {
        const body = {...options, SecretKey: this.secretKey, currency: 'NGN'};
        const url = `${this.endpoint}/account`;

        return axios.post(url, body);
    }

    /*
        Returns account details for the specified number
    */
    static async accountEnquiry(options: {accountNumber: string; bankCode: string}) {
        const body = {...options, SecretKey: this.secretKey, currency: 'NGN'};
        const url = `${this.endpoint}/account/enquire`;

        return axios.post(url, body);
    }
}

export default Bank;
