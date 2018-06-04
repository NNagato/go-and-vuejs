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
    ]
  },
  methods: {
  	upcaseData: function (index) {
  		// console.log("clicked: ", index)
  		console.log(this.todos[index])
  		this.todos[index].text = this.todos[index].text.toUpperCase()
  	}
  }
})
