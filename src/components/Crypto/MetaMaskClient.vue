<template>
  <div class="metamaskclient">
      <i class="fab fa-ethereum fa-3x"></i>
      <button ref="connectBtn" @click.once="connectToMM" :disabled="disableConnect" :class="{active : !disableConnect}"></button>
      <button @click="sendETH" :disabled="disableSend" :class="{active : !disableSend}">Send ETH to dave</button>
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
        const disableSend = ref(true)
        const connectBtn = ref(null)
        const onboarding = new MetaMaskOnboarding('http://localhost:9010')

        const connectToMM = async () => {
            if(installed.value){
                disableConnect.value = true
                console.log("Connecting to MetaMask")
                await ethereum.request({ method: 'eth_requestAccounts' }).catch(e => console.log(e))
                disableSend.value = false;
                connectBtn.value.innerHTML = 'Connected!'
            }
            else {
                onboarding.startOnboarding()
            }
        }

        const sendETH = async () => {
            const transactionParameters = {
                gas: '0x2701',
                to: '0x75D4f6bA5B1f309e65065F54AAE2dA125F54C534', // Required
                from: ethereum.selectedAddress, // must match user's active address.
                value: '0x38D7EA4C68000', // Only required to send ether to the recipient from the initiating external account.
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
            if (!isMetaMaskInstalled()) {
                installed.value = false;
                connectBtn.value.innerHTML = 'Click here to install MetaMask!'
            } else {
                installed.value = true;
                connectBtn.value.innerHTML = 'Connect'
                
            }
        })

        return {connectToMM, sendETH, disableConnect, disableSend, connectBtn }
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

.active:hover {
    background-color: rgba(0, 255, 0, 0.8);
    transition: background-color 0.5s ease-out;
    transition: box-shadow 0.5s ease-out;
    box-shadow: 0 0 5px 2px rgb(0, 255, 0, 0.8);
    border: solid rgba(0, 0, 0, 0.25) 1px;
}

</style>