//Tell Vue to use vuejsStorage
Vue.use(vuejsStorage)

//Vue instance
new Vue({
  el: "#vue",
  //local data scoped to component
  data() {
    return {
      count: 0
    }
  },

  //tell storage what keys to watch
  //and what key to store it under
  storage: {
    keys: ['count'],
    namespace: 'counter',
  },

  methods: {
    incrimentCount() {
      this.count += 1
    },
    
    decrimentCount() {
      this.count -= 1
    },

    resetCount() {
      this.count = 0
    }
  }
})