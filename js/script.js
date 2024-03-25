const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao mondo',
        image: 'https://picsum.photos/1000'
      }
    }
  }).mount('#app')