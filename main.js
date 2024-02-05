/* Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus:
Far comparire gli indirizzi email solamente quando sono stati tutti generati. */


const {
    createApp
} = Vue

createApp({
    data(){
        return {
            emails:[]
        }
    },
    mounted() {
        // axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        // .then(response => {
        //     this.emails = response.data.response
        // })
    },
    methods:{
        callMail(){

            // array to store api promises
            const apiPromises = []

            //cycle for 10 emails
            for(i = 0; i < 10; i++){
                const promise = 
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(response => {
                    return response.data.response
                })
            apiPromises.push(promise)
        }

        Promise.all(apiPromises)
        .then(emails => {
            this.emails = this.emails.concat(emails)
            console.log(this.emails)
        })
        }
    }
}).mount("#app")