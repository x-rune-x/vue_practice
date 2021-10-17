<template>
  <h1>{{ title }}</h1>
  <h3>This is a practice webpage with Vue</h3>
  <h2>ようこそ</h2>  
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <br>
        <br>
        <a href="#">More info</a>
      </template>      
      <h1>Ninja giveaway</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>
  <p>Welcome ...</p>
  <button @click="toggleModal">
    Show modal
  </button>
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="dark" @close="toggleModal2">  
      <h1>Alternate Modal</h1>    
      <template v-slot:alternate>
        <h1>This is the second modal</h1>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal2">Show modal 2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue app',
      header: 'Sign up to the giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModal2: false
    }    
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
