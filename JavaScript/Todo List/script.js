var todos = ["Buy new hat"];
window.setTimeout(function() {
  var input = prompt("What would you like to do?");
  while (input !== "quit") {

    if (input === "list") {
      console.log(todos);
    } else if(input === "new") {
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
    }
    var input = prompt("What would you like to do?");
  }
  console.log("You just quit the app!");
}, 500)
