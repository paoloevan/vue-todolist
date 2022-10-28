/**
2- cliccando sul testo dell'item, invertire il valore della proprietà
done del todo corrispondente (se done era uguale a false, impostare true
e viceversa)
 */

//import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.2.41/dist/vue.global.min.js'

const {createApp} = Vue

createApp({
    data(){
        return{
            //message:'ciao',
            newTodo: '',
            //array di oggetti (todo)
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
            this.toDo.splice(i, 1)
        },
        addTodo(){
            //devo pushare in toDo un oggetto con text:newTodo
            //prima lo creo
            this.a = {
                text: this.newTodo,
                done: false
            }
            this.toDo.unshift(this.a)
            this.newTodo = ''
        }
    }
}).mount('#app')