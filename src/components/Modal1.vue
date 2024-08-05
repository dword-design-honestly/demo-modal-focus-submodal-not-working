<template>
  <b-modal :autofocus="false" @shown="$refs.input.focus()">
    <b-form-input ref="input" />
    <b-button @click="modalController.show({ component: Modal2 })" />
  </b-modal>
</template>

<script setup>
import { ref } from 'vue';
import { useModalController } from 'bootstrap-vue-next';

import Modal2 from './Modal2.vue';

const modalController = useModalController();

const input = ref();
</script>
