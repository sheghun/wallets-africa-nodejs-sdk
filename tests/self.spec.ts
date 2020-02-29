import WalletAfrica from '../index';
import {assert, expect} from 'chai';
import {AxiosError} from 'axios';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const wallet = new WalletAfrica({
    secretKey: process.env.SECRET_KEY as string,
    publicKey: process.env.PUBLIC_KEY as string,
});

describe('Self resource tests', function() {
    it('Check balance', async function() {
        const res = await wallet.self.checkBalance();
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

});
