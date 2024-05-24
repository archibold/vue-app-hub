<script setup>
const emit = defineEmits("transactionDeleted");
const { transactions } = defineProps(["transactions"]);

function deleteTransaction(id) {
    console.log(id);
    emit("transactionDeleted", id);
}
</script>

<template>
    <h3>History</h3>
    <ul>
        <li v-for="t in transactions" :key="t.id">
            {{ t.text }} <span>{{ t.amount }}</span>
            <button @click="deleteTransaction(t.id)">x</button>
        </li>
    </ul>
</template>
