/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Blockchain` is Ether.
 */
export declare class Blockchain {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Blockchain`.
     */
    static readonly ETHEREUM: Blockchain;
    static readonly ETHEREUM_TEST: Blockchain;
    static readonly AVALANCHE: Blockchain;
    static readonly AVALANCHE_TEST: Blockchain;
    static readonly POLKADOT: Blockchain;
    static readonly POLKADOT_TEST: Blockchain;
    /**
     * Constructs an instance of the base class `Blockchain`. The only instance of the base class `Blockchain` is `Blockchain.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHEREUM: Blockchain;
export { ETHEREUM, AVALANCHE, POLKADOT };
