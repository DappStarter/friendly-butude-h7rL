require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remain exchange inner private bone gasp'; 
let testAccounts = [
"0xf06cc9d3db6866fd0af68fe3ce1fd13ffecbad465878e56409f8dc803f24dd32",
"0xb34164296e81c748ba308150f73610a8d54b40d385f058186575ef0603a169a4",
"0xd79482e82278ce2526fb5ba113bfb5900fea447477d5e3f81d5c1b0a84dceaba",
"0x30f517204b9d603cf04c592d72b34585ac813db25ba00c7ea0c90c010a78a28f",
"0xff92bfb5ca0510eb1c6e5da499caeaf265c10fb50ea726c727e3fbeb78c57ddb",
"0xf3b84f5e14d3bf47273b970bc8a0708591bdcd4966059973b768c7f34e8f27ca",
"0xc3031078bef44d74fbe788f0caeb85e278c5470335a1653814a987aa324072ae",
"0x1a2f738443a1c0b564345a8cf3751ecebd6784c6b1745875914c2d2bcb35495d",
"0x3167db1ea17e501f089e13bea56f95414b802a114f16d25c8421c325b4185180",
"0xe64d9450c7eae40ac23cc041ee2c63abd4e5b903c4fc59b186979cc4a7dd791d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

