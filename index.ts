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
    private _apiRoot = '';

    /**
     *
     * @param options - secret and public key
     */
    constructor(options: {secretKey: string; publicKey: string; sandbox?: true}) {
        axios.defaults.headers.Authorization = `Bearer ${options.publicKey}`;
        axios.defaults.headers['Content-Type'] = 'application/json';
        axios.defaults.baseURL = options.sandbox
            ? 'https://sandbox.wallets.africa'
            : 'https://api.wallets.africa';

        this.self.secretKey = options.secretKey;
        this.wallet.secretKey = options.secretKey;
    }
}

export default WalletAfrica;
