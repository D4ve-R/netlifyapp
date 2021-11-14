<template>
  <div class="metamaskclient">
      <i class="fab fa-ethereum fa-3x"></i>
      <button ref="connectBtn" @click.once="connectToMM" :disabled="disableConnect"></button>
      <button @click="sendETH">Send ETH to dave</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import MetaMaskOnboarding from '@metamask/onboarding'

export default {
    setup(){
        var ethereum
        const installed = ref(false)
        const disableConnect = ref(false)
        const connectBtn = ref(null)
        // const forwarderOrigin = 'http://localhost:9010'
        // const onboarding = new MetaMaskOnboarding({ forwarderOrigin })
        const onboarding = new MetaMaskOnboarding('http://localhost:9010')

        const connectToMM = async () => {
            if(installed.value){
                disableConnect.value = true
                console.log("Connecting to MetaMask")
                await ethereum.request({ method: 'eth_requestAccounts' }).catch(e => console.log(e))
        
            }
            else {
                onboarding.startOnboarding()
            }
        }

        const sendETH = async () => {
            const transactionParameters = {
                gas: '0x2701',
                to: '0x75D4f6bA5B1f309e65065F54AAE2dA125F54C534', // Required except during contract publications.
                from: ethereum.selectedAddress, // must match user's active address.
                value: '0x38D7EA4C68000', // Only required to send ether to the recipient from the initiating external account.
                data:
                  '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
            }

            try{
                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                })
            }catch(err){
                console.log(err)
            }
        }

        const isMetaMaskInstalled = () => {
            // check ethereum binding on window to see if installed
            ({ ethereum } = window);
            return Boolean(ethereum && ethereum.isMetaMask);
        }
        
        onMounted(() => {
            // const connectBtn = document.getElementById('connectBtn')
            if (!isMetaMaskInstalled()) {
                installed.value = false;
                connectBtn.value.innerHTML = 'Click here to install MetaMask!'
            } else {
                installed.value = true;
                if(ethereum.isConnected()){
                    disableConnect.value = true
                    connectBtn.value.innerHTML = 'Already connected!'
                } else {
                    connectBtn.value.innerHTML = 'Connect'
                }
            }
        })

        return {connectToMM, sendETH, disableConnect, connectBtn }
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
    height: 1.5rem;
    align-self: center;
    max-width: 50%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.25em 0 rgb(0, 0, 0, 0.1);
    box-sizing: border-box;
}

button:hover{
    background-color: rgba(0, 255, 0, 0.8);
    transition: background-color 1s ease-out;
    transition: box-shadow 1s ease-out;
    box-shadow: 0 0 5px 2px rgb(0, 255, 0, 0.8);
    border: solid black 1px;
}

</style>