require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar pull hunt slam fox type'; 
let testAccounts = [
"0xa14c8a46e568f7efc0ac9d253609ef1f7ba6a6ad754fe807aa61ce41fb8cdebf",
"0xad6dbabdf0b9fecbbb0189ce3722088cbb334d4d0600596be158552ecc64b09b",
"0xd97bca7efae4732808351b3154e63b33b4bfc3a7282d00ea81eea58c7652aeec",
"0xb2c8f58d37ff735b7f8270586d7f82bfd425ab33017c0a1fc8796f2961863401",
"0x29c150d43b761d80cd85dbdf2b2da678fba275581944e1c8e7e55a319db9a01a",
"0xf9a2bd5227bb9bb574907408c90028f997a1ee3fc21066fee65c3d5c20a2afcd",
"0xabef9e0336899f44cf39cb0b3229be499c21e750721ca9b100e2016fbe6bc4ad",
"0x484a217a1f03662cbdf0cb66ca964d9767cdbc1f673705d567edfe28064c1f96",
"0xf5896075e3fca5b79417aa429f84671acca3df2004bae435b2f7413c53a4ac29",
"0x060fcb90af25a05c2eca8da737687384e0089728a6e097d259dbdf55df831219"
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
            version: '^0.5.11'
        }
    }
};
