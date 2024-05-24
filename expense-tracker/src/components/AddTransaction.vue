<script setup>
const emit = defineEmits("transactionSubmit");
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const text = ref("");
const amount = ref(0);

function onSubmit() {
    if (!text.value || !amount.value) {
        toast.error("Fields cannot be empty...");
        return;
    }

    const tData = {
        text: text.value,
        amount: amount.value,
    };

    emit("transactionSubmit", tData);

    text.value = "";
    amount.value = "";
}
</script>
<template>
    <h3>Add new transaction</h3>
    <form @submit.prevent="onSubmit">
        <div>
            <label>Text</label>
            <input type="text" placeholder="Enter text..." v-model="text" />
        </div>
        <div>
            <label
                >Amount <br />
                (negative -expenses, positive - income)</label
            >
            <input
                type="number"
                placeholder="Enter amount..."
                v-model="amount"
            />
        </div>
        <button>Add transaction</button>
    </form>
</template>
