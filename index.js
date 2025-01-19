const todos = [
  {
    title: "Initial Todo",
    description: "This is the initial todo",
    complete: false,
  }
];

// Function to add a new item to the to-do list
function addTodo(title, description, isCompleted = false) {
  // create an object to hold the new task
  const newTodo = {
    title: title,
    description: description,
    complete: isCompleted
  };
  // add the new task to the to-do list
  todos.push(newTodo);
};

// Function to remove an existing item from the to-do list by its title
function removeTodo(title) {
  // create an array filtered by the task's title
  const filteredTodos = todos.filter(item => item.title !== title);
  // empty the current to-do list
  todos.length = 0;
  // use the spread operator to "combine" the arrays
  todos.push(...filteredTodos);
  // console.log(`"${title}" has been removed from your to-do list.\n\n`);
};

// Function to edit an existing item from the to-do list
function editTodo(title, newTitle = null, newDescription = null) {
  // find the item in the to-do list by its title
  const todo = todos.find(item => item.title === title);
  // if the task is found, update the title and/or description; otherwise log error
  if (todo) {
    if (newTitle) todo.title = newTitle;
    if (newDescription) todo.description = newDescription;
  } else {
    console.log(`Action Failure: The task "${title}" was not found.\n\n`);
  }
};

// Function to mark an existing item from the to-do list as complete
function markTodoComplete(title) {
  // find the task that needs to be marked completed
  const task = todos.find(item => item.title === title);
  // toggle the task completion statues
  if (task) {
    if (!task.complete) {
      task.complete = true;
      // console.log(`"${title}" marked as completed.\n\n`);
    } else {
      console.log(`Action Failure: The task "${title}" was already completed.\n\n`);
    }
  } else {
    console.log(`Action Failure: The task "${title}" was not found.\n\n`);
  }
};

// Function to display the length of the to-do list
function displayTodoLength() {
  console.log(`You have ${todos.length} todos.\n`);
};


function app() {
  console.log('Welcome to the Todo Application');
  console.log('================================\n');

  // You will need to call your methods below this comment to edit the todos array
  addTodo("Homework", "JS Project");
  addTodo("Saturday Chores", "Wash clothes and do dishes");
  removeTodo("Homework");
  editTodo("Saturday Chores", null, "Wash and fold clothes");
  // editTodo("Read");
  markTodoComplete("Initial Todo");
  // markTodoComplete("Initial Todo");
  // markTodoComplete("Read More");
  // You will need to call your methods above this comment to edit the todos array
  
  console.log('Here is a list of your todos:');

  // Print the length of the todos array below this comment
  displayTodoLength();
  // Print the length of the todos array above this comment

  // Iterate over the todos array and console.log each todo below this comment
  todos.forEach(todo => {
    console.log(`Title: ${todo.title}`);
    console.log(`Description: ${todo.description}`);
    console.log(`Completed: ${todo.complete ? 'Yes' : 'No'}`);
    console.log('-----------------------\n');
  });
}

app();