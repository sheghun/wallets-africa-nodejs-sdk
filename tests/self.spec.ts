import {assert} from 'chai';
import WalletAfrica from '../index';

/*
   Self resource tests file
 */

// The key is supplied from package.json under the scripts command
const wallet = new WalletAfrica(process.env.KEY as string);

describe('Self resource tests', function() {
    it('Check balance', async function() {
        const balance = await wallet.self.checkBalance();
        console.log(balance);
    });
});
