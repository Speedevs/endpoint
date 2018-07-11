var contract = require("truffle-contract");

var contractJson = require("./ClassicDelta");
var ClassicDelta = contract(contractJson);

ClassicDelta.setProvider(web3.currentProvider);

(async () => {
  console.log('Estimated gas for contract is: ' + web3.eth.estimateGas({ data: ClassicDelta.bytecode }));
  let classicDelta = await ClassicDelta.deployed();
  let res = await classicDelta.deposit({from: "0x9eeb4dce9837e6a4461e3797abe3d10a8a5bdbb5", value: 1});
  console.log(res);
})();
