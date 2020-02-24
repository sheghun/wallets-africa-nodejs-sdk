import Self from './resources/self';
/**
 * @class WalletAfrica
 * @author sheghun <github.com/sheghun>
 * @link https://github.com/sheghun/wallets-africa-nodejs-sdk
 *
 * Wallets Africa wrapper for communicating with the wallets africa api
 */
class WalletAfrica {
    private _key: string;
    public self = Self;

    /**
     *
     * @param key - secret key
     */
    constructor(key: string) {
        this._key = key;
        this.self.key = key;
    }
}

export default WalletAfrica;
