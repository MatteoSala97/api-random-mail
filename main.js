// https://flynn.boolean.careers/exercises/api/random/mail


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
            for(i = 0; i < 10; i++){
                axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
            const newEmail = response.data.response
            this.emails.push(newEmail)
            console.log(newEmail)
            })
        }
        }
    }
}).mount("#app")