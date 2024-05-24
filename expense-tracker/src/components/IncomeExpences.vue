<script setup>
const { income, expence } = defineProps(["income", "expence"]);
</script>
<template>
    <div>
        <div>
            <h4>Income</h4>
            <p>+${{ income }}</p>
        </div>
        <div>
            <h4>Expence</h4>
            <p>-${{ expence }}</p>
        </div>
    </div>
</template>
