import WalletAfrica from '../index';
import {assert, expect} from 'chai';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const wallet = new WalletAfrica({
    secretKey: process.env.SECRET_KEY as string,
    publicKey: process.env.PUBLIC_KEY as string,
    sandbox: true,
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

    it('Transactions', async function() {
        const res = await wallet.self.transactions();
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Verify BVN', async function() {
        const res = await wallet.self.verifyBvn({
            bvn: process.env.BVN as string,
            dateOfBirth: process.env.BVN_DATE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            BVN: process.env.BVN as string,
        });
    });

    it('Get Wallets', async function() {
        const res = await wallet.self.getWallets();
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });
});
