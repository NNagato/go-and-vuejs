console.log("hello")
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todos: [
    	{text: 'wtf'},
    	{text: 'wp'},
    	{text: 'gg'}
    ]
  },
  methods: {
  	upcaseData: function (index) {
  		console.log("clicked: ", index)
  		console.log(this.todos[index])
  		this.todos[index].text = this.todos[index].text.toUpperCase()
  	}
  }
})

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})