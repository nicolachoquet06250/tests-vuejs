<template name="test" let:side>
    <div>ceci est un test {{ side }}</div>
</template>

<template>
    <template v-if="side === 'top'">
        <template is="test" :side="side" />
    </template>

    <div>
        {{ lastValue }}
        <button @click="value++">
            Click here !
        </button>
    </div>

    <template v-if="side === 'bottom'">
        <template is="test" />
    </template>
</template>

<script setup lang="ts">
import { debouncedRef } from '@vueuse/shared';
import { watch } from 'vue';

let { side = 'top' } = defineProps<{
    side?: 'top' | 'bottom',
}>();

let { count } = $defineModels<{
  count?: ModelOptions<number, { defaultValue: 0 }>
}>();

let value = $ref<number>(0);
let lastValue = $ref(count);

const debounced = debouncedRef($$(value), 1500);

let manualChange = false;

watch(debounced, (debounced) => {
    if (debounced !== 0) {
        manualChange = false;
        lastValue = value;
        value = 0;
    }
});

watch($$(lastValue), () => {
    !manualChange && (count = lastValue);
    manualChange = false;
})

watch($$(count), (v) => {
    manualChange = true;
    lastValue = v;
});
</script>