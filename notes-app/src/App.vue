<script setup>
import { ref, computed, nextTick } from "vue";
const showModal = ref(false);
const notes = ref([]);
const newNote = ref("");
const textarea = ref(null);

function addNote() {
    notes.value.push({
        note: newNote.value,
        date: new Date().toLocaleDateString(),
    });
    newNote.value = "";
    showModal.value = false;
}

function closeModal() {
    newNote.value = "";
    showModal.value = false;
}

function openModal() {
    showModal.value = true;
    nextTick(() => {
        textarea.value.focus();
    });
}

const notesReversed = computed(() => [...notes.value].reverse());
</script>
<template>
    <main>
        <div v-if="showModal" class="overlay">
            <div class="modal">
                <textarea
                    ref="textarea"
                    v-model.trim="newNote"
                    name="note"
                    id="note"
                    cols="30"
                    rows="10"
                ></textarea>
                <button @click="addNote">Add note</button>
                <button class="close" @click="closeModal">Close</button>
            </div>
        </div>
        <div class="container">
            <header>
                <h1>Notes</h1>
                <button @click="openModal">+</button>
            </header>
            <div class="cards-container">
                <div class="card" v-for="card in notesReversed">
                    <p class="main-text">{{ card.note }}</p>
                    <p class="date">{{ card.date }}</p>
                </div>
                <div class="card">
                    <p class="main-text">dfdas fadsfsa fasdasd</p>
                    <p class="date">03/03/2024</p>
                </div>
                <div class="card">
                    <p class="main-text">dfdas fadsfsa fasdasd</p>
                    <p class="date">03/03/2024</p>
                </div>
                <div class="card">
                    <p class="main-text">dfdas fadsfsa fasdasd</p>
                    <p class="date">03/03/2024</p>
                </div>
                <div class="card">
                    <p class="main-text">dfdas fadsfsa fasdasd</p>
                    <p class="date">03/03/2024</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
}

.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
}

header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 100%;
    background-color: blanchedalmond;
    color: black;
    font-size: 20px;
    transition: background-color 0.1s ease-in;
}

header button:active {
    background-color: rgb(255, 242, 222);
}

.card {
    width: 225px;
    height: 225px;
    background-color: bisque;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    color: black;
}

.date {
    font-size: 12px;
    font-weight: bold;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 242, 222, 0.77);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal textarea {
    outline: none;
}
.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: blanchedalmond;
    outline: none;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.1s ease-in;
}

.modal button:active {
    background-color: rgb(255, 242, 222);
}

.modal button:hover {
    opacity: 0.9;
}

.modal button.close {
    background-color: rgb(246, 147, 147);
}

.modal button.close:active {
    background-color: rgb(247, 189, 189);
}
</style>
