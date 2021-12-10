const app = new Vue({
    el: "#root",
    data: {
        email_list: [],
        print: false,
    },
    created () {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                this.email_list.push(response.data.response);
            });
            if(i == 9)this.print = true;
        }
    }
});