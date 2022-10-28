
const { createApp } = Vue;

createApp({
    data() {
        return {
            newTodo: '',
            short: false,
            toDo: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'completare esercizio',
                    done: true
                },
                {
                    text: 'pulire casa',
                    done: false
                },
                {
                    text: 'preparare cena',
                    done: false
                }
            ]
        }
    },
    methods: {
        removeItem(i) {
            console.log('click');
            this.toDo.splice(i, 1);
        },
        addTodo() {
            if (this.newTodo.length < 1) {
                this.short = true;
            } else {
                this.short=false;
                const newItem = {
                    text: this.newTodo,
                    done: false
                }
                this.toDo.unshift(newItem);
                this.newTodo = '';
            }
        }
    }
}).mount('#app');