/**
 *  All Airtime functionality and methods
 * @class Airime
 */
class Airtime {
    /*
        Api key
     */
    static secretKey = '';

    static endpoint = '/airtime';

    /*
        Returns a list of all airtime providers
     */
    static async airtimeProviders(options: {Code: string; Amount: number; PhoneNumber: string}) {}

    /*
        Purchase airtime against the phone number supplied
     */
    static async airtimePurchase(options: {Code: string; Amount: string; PhoneNumber: string}) {}
}
