import axios from 'axios';
import Self from './resources/self';
import Wallet from './resources/wallet';

/**
 * @class WalletAfrica
 * @author sheghun {@link https://github.com/sheghun}
 * {@link https://github.com/sheghun/wallets-africa-nodejs-sdk}
 *
 * Wallets Africa wrapper for communicating with the wallets africa api
 */
class WalletAfrica {
    public self = Self;
    public wallet = Wallet;

    /**
     *
     * @param keys - secret and public key
     */
    constructor(keys: {secretKey: string; publicKey: string}) {
        axios.defaults.headers.Authorization = `Bearer ${keys.publicKey}`;
        axios.defaults.headers['Content-Type'] = 'application/json';

        this.self.secretKey = keys.secretKey;
        this.wallet.secretKey = keys.secretKey;
    }
}

export default WalletAfrica;
