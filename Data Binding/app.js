const app = Vue.createApp({
    data() {
        return {
            yourName: 'Vicky',
            yourAge: 40,
            ageFiveYears: 45,
            myFavouriteNumber: randomNumber()
        };
    },
    methods: {
      randomNumber() {
         const randomNumber = Math.random();
      }
    }
});

app.mount('#assignment');

