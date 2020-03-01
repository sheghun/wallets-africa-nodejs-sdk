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

    static endpoint = '/bank';

    /*
        Returns bank
     */

    static async bankDetails(transRef: string) {}

    /*
        Transfer from wallet to bank account supplied
      */
    static async bankAccountTransfer(options: BankTransOptions) {}

    /*
        Returns account details for the specified number
    */
    static async accountEnquiry(options: {accountNumber: string; bankCode: string}) {}

    /*
        Returns a list of all banks
     */
    static async getBanks() {}
}
