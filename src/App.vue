<template>
  <b-button @click="modalController.show({ component: Modal1 })" />
  <b-modal-orchestrator />
</template>

<script setup>
import { useModalController } from 'bootstrap-vue-next';

import Modal1 from './components/Modal1.vue';

const modalController = useModalController();
</script>
