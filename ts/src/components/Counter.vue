<template>
  <div>
    <button @click="decrement" :disabled="isMin">
      -
    </button>
    {{ count }}
    <button @click="increment" :disabled="isMax">
      +
    </button>
  </div>
  <slot name="additional-infos" />
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';

export let min: number = -Infinity;
export let max: number = Infinity;
export let step: number = 1;
export let start: number = 0;

defineSlots<{
    'additional-infos': {}
}>();

let count = $ref(start);
let isMax = $ref(false);
let isMin = $ref(false);

onMounted(() => {
    isMax = count === max;
    isMin = count === min;
});

const increment = () => {
    const next = count + step;
    next <= max && (count = next);
};
const decrement = () => {
    const next = count - step;
    next >= min && (count = next);
};

watch(() => count, () => {
    isMax = count === max;
    isMin = count === min;
})
</script>

<style scoped>
div {
    margin-top: 5px;
    margin-bottom: 5px;
}

button:disabled:hover {
    border-color: transparent;
    cursor: default;
}
</style>