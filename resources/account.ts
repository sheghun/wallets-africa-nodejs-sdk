import axios from 'axios';

/**
 *  All Airtime functionality and methods
 * @class Airtime
 */
class Account {
    /*
        Api key
     */
    static secretKey = '';

    static endpoint = '/account';

    /*
       Fetches the bvn information
     */
    static async resolveBvn(bvn: string) {
        const body = {bvn, SecretKey: this.secretKey};
        const url = `${this.endpoint}/resolvebvn`;

        return axios.post(url, body);
    }
}
