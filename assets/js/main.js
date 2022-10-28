
const {createApp} = Vue;

createApp({
    data(){
        return{
            newTodo: '',
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
    methods:{
        removeItem(i){
            console.log('click');
            this.toDo.splice(i, 1);
        },
        addTodo(){
            this.a = {
                text: this.newTodo,
                done: false
            }
            this.toDo.unshift(this.a);
            this.newTodo = '';
        }
    }
}).mount('#app');