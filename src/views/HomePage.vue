<template>
    <h1>Home Page</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Click for increase</button>
    <button @click="count > 1 ? count-- : count">Click for decrease</button>
</template>

<script setup>
    import { ref} from 'vue';

    const count = ref(0);

</script>