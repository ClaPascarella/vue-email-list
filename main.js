const { createApp } = Vue

createApp({

    data() {
        return {
            numEmail: 10,
            emails: [],
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods: {
        
        
    },
    mounted() {
       
        for(let i = 0; i < this.numEmail; i++){
            axios.get(this.indirizzo).then((risultato) => {
                
                (this.emails).push(risultato.data.response);
            });
        }

    }

}).mount('#app');