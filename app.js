const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            console.log('I have been clicked.')
            this.title = title
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')