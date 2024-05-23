import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        counter: 11,
    }),
    getters: {
        oddOrEven: (state) => (state.counter % 2 ? "Odd" : "Even"),
    },
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
    },
});
