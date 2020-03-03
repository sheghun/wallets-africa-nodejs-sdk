import WalletAfrica from '../index';
import {assert} from 'chai';
import faker from 'faker';
import {AxiosError} from 'axios';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const walletAfrica = new WalletAfrica({
    secretKey: process.env.SECRET_KEY as string,
    publicKey: process.env.PUBLIC_KEY as string,
});

let phone = faker.phone
    .phoneNumber()
    .replace('(', '')
    .replace(')', '')
    .replace(' ', '')
    .replace('x', '')
    .split('-')
    .join('');

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
        console.log(phone);
        try {
            const res = await walletAfrica.wallet.create({
                dateOfBirth: '22-08-1923',
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                password: 'anything',
                phoneNumber: phone,
            });
            assert.strictEqual(res.status, 200);
            console.log(res.data);
            assert.containsAllDeepKeys(res.data, {
                Response: {
                    ResponseCode: '200',
                },
                Data: expData,
            });
        } catch (err) {
            console.log(err.response.data);
        }
    });

    it('Debit', async function() {
        const res = await walletAfrica.wallet.debit({
            transactionReference: (Date.now() as any) as string,
            amount: 100,
            phoneNumber: process.env.PHONE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Credit', async function() {
        const res = await walletAfrica.wallet.credit({
            transactionReference: (Date.now() as any) as string,
            amount: 100,
            phoneNumber: process.env.PHONE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Generate', async function() {
        const res = await walletAfrica.wallet.generate({
            dateOfBirth: '22-08-1923',
            email: 'joshn@d.com',
            firstName: 'Lydia',
            lastName: 'Okon',
            password: 'anything',
            phoneNumber: process.env.PHONE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Generate Account Number', async function() {
        try {
            const res = await walletAfrica.wallet.generateAccountNumber(
                process.env.PHONE as string,
            );
            assert.strictEqual(res.status, 200);
            assert.containsAllDeepKeys(res.data, {
                Response: {
                    ResponseCode: '200',
                },
            });
        } catch (err) {
            const response = (err as AxiosError).response;
            if (!response) {
                throw err;
                return;
            }
            assert.equal(
                response.data.Message,
                'This wallet account already has an account number.',
            );
        }
    });

    it('Retrieve Account Number', async function() {
        try {
            const res = await walletAfrica.wallet.retrieveAccountNumber(
                process.env.PHONE as string,
            );
            assert.strictEqual(res.status, 200);
            assert.containsAllDeepKeys(res.data, {
                Response: {
                    ResponseCode: '200',
                },
            });
        } catch (err) {
            const response = (err as AxiosError).response;
            if (!response) {
                throw err;
                return;
            }
            console.log('Retrieve', response.data);

            assert.equal(
                response.data.Message,
                'This wallet account already has an account number.',
            );
        }
    });

    it('Set Password', async function() {
        const res = await walletAfrica.wallet.setPassword({
            phoneNumber: process.env.PHONE as string,
            password: 'anything',
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Set Pin', async function() {
        try {
            const res = await walletAfrica.wallet.setPin({
                phoneNumber: process.env.PHONE as string,
                transactionPin: 'anything',
            });
            assert.strictEqual(res.status, 200);
            assert.containsAllDeepKeys(res.data, {
                Response: {
                    ResponseCode: '200',
                },
            });
        } catch (err) {
            console.log(err.response.data);
        }
    });

    it('Transactions', async function() {
        const res = await walletAfrica.wallet.setPassword({
            phoneNumber: process.env.PHONE as string,
            password: 'anything',
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Verify BVN', async function() {
        const res = await walletAfrica.wallet.verifyBvn({
            phoneNumber: process.env.PHONE as string,
            bvn: process.env.BVN as string,
            dateOfBirth: process.env.BVN_DATE as string,
        });
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });

    it('Get User', async function() {
        const res = await walletAfrica.wallet.getUser(process.env.PHONE as string);
        assert.strictEqual(res.status, 200);
        assert.containsAllDeepKeys(res.data, {
            Response: {
                ResponseCode: '200',
            },
        });
    });
});
