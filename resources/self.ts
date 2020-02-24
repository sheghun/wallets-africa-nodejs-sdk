import axios from 'axios';
import {ApiRoot} from '../constants';
/**
 *  All wallet self functionality and methods
 * @class Self
 */
class Self {
    /*
        Api key
     */
    static key = '';

    static endpoint = '/self';
    /**
     * To get balance of account in different currency
     *
     * @param currency - currency to get balance in
     */
    static async checkBalance(currency = 'NGN') {
        const body = {currency, SecretKey: this.key};

        const url = `${ApiRoot}${this.endpoint}/balance`;

        return axios.post(url, body, {headers: {'Content-Type': 'application/json'}});
    }

    /**
     * Retrieves and returns a list of performed transactions within a specified time period
     *
     */
    static async transactions() {}

    /**
     * Verifies BVN
     */
    static async verifyBvn() {}

    /**
     * Retrieves and returns a list of users
     */
}

export default Self;
