// Initialize Web3
const web3 = new Web3(Web3.MetaMask || 'http://localhost:8545');

// Check if Web3 has been injected by the browser (e.g., MetaMask)
if (typeof web3 !== 'undefined') {
  // Use the provider from the browser
  web3 = new Web3(web3.MetaMask);
} else {
  // Connect to a local or remote node
  web3 = new Web3(new Web3.MetaMask.HttpProvider('http://localhost:8545'));
}


// Contract address and ABI
const contractAddress = '0x022C002793a4257C613B8FE652711a81B1Dd575a';
const contractABI = [...]; // Your contract's ABI

// Load the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);


// Call a contract method
contract.methods.getVoteCount(0).call()
  .then(function(result) {
    // Handle the result
    console.log('Vote count:', result);
  })
  .catch(function(error) {
    // Handle errors
    console.error('Error:', error);
  });
