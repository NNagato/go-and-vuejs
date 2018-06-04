(function(Vue) {
  "use strict";
  
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  console.log("hello")
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      todos: [
      	{text: 'framja'},
      	{text: 'is'},
      	{text: 'the'},
        {text: ':v (best or something)'}
      ],
      apiData: 0,
    },
    created: function() {
      console.log("this: ", this.$http)
      this.$http.get('/api/data').then(
        function(res) {
          console.log(res)
          if (res.success) {
            this.apiData = res.data ? res.data : 100
          }
        })
      this.apiData = 1000
    },
    methods: {
    	upcaseData: function (index) {
    		// console.log("clicked: ", index)
    		console.log(this.todos[index])
    		this.todos[index].text = this.todos[index].text.toUpperCase()
    	}
    }
  })
})(Vue);