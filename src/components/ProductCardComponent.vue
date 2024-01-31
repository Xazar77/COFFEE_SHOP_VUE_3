<script setup>
import { defineEmits, watch } from 'vue'
const props = defineProps({
  classItem: {
    type: String,
    required: false,
  },

  card: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['onNavigate'])
function onEmmit(id) {
  emit('onNavigate', id)
}
</script>

<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="card.url" :alt="card.url" />
      <div :class="classItem +'-title'">
        {{card.name}}
      </div>
      <div :class="classItem +'-country'">{{card.country}}</div>
      <div :class="classItem +'-price'">{{card.price}}</div>
  </div>
</template>
