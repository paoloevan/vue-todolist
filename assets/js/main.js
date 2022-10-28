/**
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x":
cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi":
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.
 */

//import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3.2.41/dist/vue.global.min.js'

const {createApp} = Vue

createApp({
    data(){
        return{
            //message:'ciao',
            //array di oggetti (todo)
            toDo: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'completare esercizio',
                    done: false
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
    }
}).mount('#app')