import WalletAfrica from '../index';
import {assert, expect} from 'chai';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const walletAfrica = new WalletAfrica({
    secretKey: process.env.SECRET_KEY as string,
    publicKey: process.env.PUBLIC_KEY as string,
    sandbox: true,
});

describe('Self resource tests', function() {
    it('Checks balance', async function() {
        const res = await walletAfrica.self.checkBalance('NGN');
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
                Message: 'Balance Retrieved successfully',
            },
        });
    });

    it('Transactions', async function() {
        const res = await walletAfrica.self.transactions({
            currency: 'NGN',
            transactionPin: '1111',
            transactionType: 1,
            dateFrom: '2020-01-15',
            dateTo: '2020-02-03',
            take: 10,
            skip: 0,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
                Message: 'Transaction Retrieved successfully',
            },
        });
    });

    it('Verify BVN', async function() {
        const res = await walletAfrica.self.verifyBvn({
            bvn: process.env.BVN as string,
            dateOfBirth: process.env.BVN_DATE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            BVN: process.env.BVN as string,
        });
    });

    it('Get Wallets', async function() {
        const res = await walletAfrica.self.getWallets();
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });
});
