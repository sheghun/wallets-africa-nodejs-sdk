import WalletAfrica from '../index';
import {assert, expect} from 'chai';
import faker from 'faker';
import {AxiosError} from 'axios';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const walletAfrica = new WalletAfrica({
    secretKey: process.env.SECRET_KEY as string,
    publicKey: process.env.PUBLIC_KEY as string,
    sandbox: true,
});

const phone1 = '08099999999';

const phone2 = '08099999999';

const transactionPin = '1111';

let expData = {
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    BVN: '',
    Password: '',
    DateOfBirth: '',
    DateSignedup: '',
    AccountNo: '',
    Bank: '',
    AccountName: '',
    AvailableBalance: 0,
};

describe('Wallet resource tests', function() {
    it('Create', async function() {
        const res = await walletAfrica.wallet.create({
            dateOfBirth: '22-08-1923',
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: 'anything',
            phoneNumber: phone1,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
            Data: expData,
        });
        // Assign response to expected data
        // So we can reuse contents for other tests
        expData = res.data.DATA;
    });

    it('Debit', async function() {
        try {
            const res = await walletAfrica.wallet.debit({
                transactionReference: (Date.now() as any) as string,
                amount: 100,
                phoneNumber: phone1,
            });
            assert.equal(res.status, 200);
        } catch (err) {
            if (err.response) {
                const res = err.response;
                assert.deepEqual(res.data.Response, {
                    ResponseCode: '400',
                    Message: 'Insufficient Funds',
                });
            } else {
                throw err;
            }
        }
    });

    it('Credit', async function() {
        try {
            const res = await walletAfrica.wallet.credit({
                transactionReference: (Date.now() as any) as string,
                amount: 100,
                phoneNumber: phone1,
            });
            assert.strictEqual(res.status, 200);
            assert.containsAllDeepKeys(res.data, {
                Response: {
                    ResponseCode: '200',
                },
            });
        } catch (err) {
            if (err.response) {
                const res = err.response;
                assert.deepEqual(res.data.Response, {
                    ResponseCode: '400',
                    Message: 'Insufficient Funds',
                });
            } else {
                throw err;
            }
        }
    });

    it('Generate', async function() {
        const res = await walletAfrica.wallet.generate({
            dateOfBirth: faker.date.past(),
            email: faker.internet.email(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            password: faker.name.firstName(),
            phoneNumber: phone2,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });
});
