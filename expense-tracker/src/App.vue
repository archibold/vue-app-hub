<script setup>
import Header from "@/components/Header.vue";
import Balance from "@/components/Balance.vue";
import IncomeExpences from "@/components/IncomeExpences.vue";
import TransactionList from "@/components/TransactionList.vue";
import AddTransaction from "@/components/AddTransaction.vue";
import { uid } from "uid";
import { useToast } from "vue-toastification";
import { ref, computed, onMounted } from "vue";

onMounted(() => {
    const savedTransaction = JSON.parse(localStorage.getItem("transactions"));

    if (savedTransaction) {
        transactions.value = savedTransaction;
    }
});
const toast = useToast();
const transactions = ref([
    { id: 1, text: " Flower", amount: -20 },
    { id: 2, text: " Salary", amount: 200 },
    { id: 3, text: " Computer", amount: -10 },
    { id: 4, text: " Sandals", amount: -100 },
]);
const total = computed(() =>
    transactions.value.reduce((acc, t) => acc + t.amount, 0)
);

const income = computed(() =>
    transactions.value
        .filter((a) => a.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0)
        .toFixed(2)
);

const expence = computed(() =>
    Math.abs(
        transactions.value
            .filter((a) => a.amount < 0)
            .reduce((acc, t) => acc + t.amount, 0)
            .toFixed(2)
    )
);

function onSubmit(data) {
    transactions.value.push({
        id: uid(),
        ...data,
    });
    saveToLocalStorage();
    toast.success("Transaction added!");
}

function onDelete(id) {
    transactions.value = transactions.value.filter(
        (transactions) => transactions.id != id
    );
    saveToLocalStorage();
    toast.success("Transaction deleted!");
}

function saveToLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions.value));
}
</script>
<template>
    <Header />
    <div class="container">
        <Balance :total />
        <IncomeExpences :income :expence />
        <TransactionList
            :transactions="transactions"
            @transaction-deleted="onDelete"
        />
        <AddTransaction @transaction-submit="onSubmit" />
    </div>
</template>
