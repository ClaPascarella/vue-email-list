const { createApp } = Vue

createApp({

    data() {
        return {
            numEmail: 10,
            emails: [],
            indirizzo: 'https://flynn.boolean.careers/exercises/api/random/mail',
            
        }
    },
    methods: {
        getmail() {
            
            for(let i = 0; i < this.numEmail; i++){
            axios.get(this.indirizzo).then((risultato) => {
                    
                    (this.emails).push(risultato.data.response);
                   
                });
            }

           
            
            
        },

         cancel(i) {
                this.emails.splice(i, 10);

            }
        
    },
    mounted() {
       
        

    }

}).mount('#app');