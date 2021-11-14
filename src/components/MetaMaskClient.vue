<template>
  <div class="metamaskclient">
      <i class="fab fa-ethereum fa-3x"></i>
      <button id="connectBtn" @click="connect" :disabled="false"></button>
      <button @click="getAccounts">Send dave ETH</button>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import MetaMaskOnboarding from '@metamask/onboarding'


export default {
    setup(){
        var installed = false;
        var disabled = false
        var ethereum
        var connectBtn
        const forwarderOrigin = 'http://localhost:9010'
        const onboarding = new MetaMaskOnboarding({ forwarderOrigin })

        const isMetaMaskInstalled = () => {
            //Have to check the ethereum binding on the window object to see if it's installed
            ({ ethereum } = window);
            return Boolean(ethereum && ethereum.isMetaMask);
            };

        const MetaMaskClientCheck = () => {
            connectBtn = document.getElementById('connectBtn')
            if (!isMetaMaskInstalled()) {
                installed = false;
                connectBtn.innerText = 'Click here to install MetaMask!';
            } else {
                installed= true;
                connectBtn.innerText = 'Connect'
            }
        };

        const connect = async () => {
            if(installed){
                try {
                    // Will open the MetaMask UI
                    console.log("Connecting to MetaMask")
                    connectBtn.disabled = true
                    await ethereum.request({ method: 'eth_requestAccounts' });   
                } catch (error) {
                    console.error(error);
                }
            }
            else {
                onboarding.startOnboarding()
            }
            connectBtn.disabled = true
        }

        const getAccounts = async () => {
            const transactionParameters = {
                gas: '0x2701',
                to: '0x75D4f6bA5B1f309e65065F54AAE2dA125F54C534', // Required except during contract publications.
                from: ethereum.selectedAddress, // must match user's active address.
                value: '0x38D7EA4C68000', // Only required to send ether to the recipient from the initiating external account.
                data:
                  '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
                chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
            };
            try{
                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                })
            }catch(err){
                console.log(err)
            }
        }
        
        onMounted(() => {
            MetaMaskClientCheck();
        })

        return {connect, getAccounts, disabled}
    },
}
</script>

<style scoped>

.metamaskclient {
    display:flex;
    flex-direction: column;
}

.fab {
    margin: 1rem;
}

button{
    align-self: center;
    max-width: 50%;
    margin-top: 0.5rem;
}

</style>