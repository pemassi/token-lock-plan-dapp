<template>
  <v-app>
    <v-main>
      <button @click="connect">test</button>
    </v-main>
    <Web3ModalComponent
      ref="web3modal"
      :theme="theme"
      :provider-options="providerOptions"
      cache-provider
    />
  </v-app>
</template>

<script setup>
import { Web3ModalComponent } from "web3modal-vue3";
import {nextTick, onBeforeMount, onMounted, ref} from "vue";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {useStore} from "vuex";

const store = useStore();
const web3modal = ref(null);

let theme = "light";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark';
}

let test = import.meta.env.VITE_INFURA_API_KEY;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: import.meta.env.VITE_INFURA_API_KEY,
    }
  }
};

const connect = () => {
  console.log("clicked")
  store.dispatch('connect');
};

onMounted(() => {
  nextTick(async () => {
    store.commit('setWeb3Modal', web3modal.value);
    if (web3modal.value.cachedProvider) {
      connect();
    }
  });
});

</script>
