"use strict";

let todoList = {
    todos: [],
      
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });        
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;        
    },

    deleteTodo: function(position) {
        this.todos.splice(position,1);        
    },

    toggleCompleted: function(position) {        
        this.todos[position].completed = !this.todos[position].completed;        
    },

    toggleAll: function() {        
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        this.todos.forEach(function(todo){
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        if (completedTodos === totalTodos) {                        
            this.todos.forEach(function(todo) {
                todo.completed = false;
            })
            } else {
                this.todos.forEach(function(todo) {
                    todo.completed = true;
                })}              
    }
};

let handlers = {
    toggleAll: function () {
        todoList.toggleAll()
        view.displayTodos();
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {        
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');

        todoList.changeTodo(changeTodoPositionInput.valueAsNumber - 1, changeTodoTextInput.value);

        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position) {        
        todoList.deleteTodo(position);        
        view.displayTodos();
    },
    toggleCompleted: function(position) {
        todoList.toggleCompleted(position);        
        view.displayTodos();
    },
};

let view = {
    displayTodos: function() {
        let todosUl = document.querySelector('main > ul');
        todosUl.innerHTML = ''

        todoList.todos.forEach(function(todo, position) {
            let todoLi = document.createElement('li');            
            let completedSpan = document.createElement('span');
            let todoTextSpan = document.createElement('span');
            let deleteButtonSpan = document.createElement('span');                                    

            if (todo.completed === true) {
                completedSpan.textContent = '✔ ';
            } else {
                completedSpan.textContent = ' -- ';
            }

            completedSpan.className = 'completed';
            todoTextSpan.textContent = todo.todoText;
            deleteButtonSpan.appendChild(this.createDeleteButton());
            deleteButtonSpan.className = 'deleted';
            
            todoLi.id = position;            
            
            todosUl.appendChild(todoLi);
            todoLi.appendChild(completedSpan);
            todoLi.appendChild(todoTextSpan);
            todoLi.appendChild(deleteButtonSpan);
        }, this);
    },

    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '✘';
        deleteButton.className = 'deleteButton';

        return deleteButton;
    },

    setUpEventListeners: function() {
        let todosUl = document.querySelector('main > ul');

        todosUl.addEventListener('click', function(event) {
            let elementClicked = event.target;
        
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.parentNode.id));
            }

            if (elementClicked.className === 'completed') {
                handlers.toggleCompleted(parseInt(elementClicked.parentNode.id));                
            }
        
        });
    }
};

let createLists = {
    newList: function() {
        todoList.todos = [];
        view.displayTodos();
    },
    pbjList: function() {
        todoList.todos = [{todoText: "Gather bread, peanut butter, and jelly", completed: true},
                            {todoText: "Put two slices of bread on a plate", completed: true},
                            {todoText: "Spread peanut butter on one slice", completed: false},
                            {todoText: "Spread jelly on the other slice", completed: false},
                            {todoText: "Combine the slices and enjoy", completed: false},];
        view.displayTodos();
    },
    workList: function() {
        todoList.todos = [{todoText: "Check email", completed: true},
                            {todoText: "Review sprint board", completed: false},
                            {todoText: "Attend scrum meeting", completed: false},
                            {todoText: "Go to lunch", completed: false},
                            {todoText: "Send out status email", completed: false},
                            {todoText: "Complete timesheet", completed: false},
                            {todoText: "Log out and go home", completed: false}];
        view.displayTodos();
    },    
    setupCreateListEventListeners: function() {
        let todosNav = document.querySelector('Nav > ul');

        todosNav.addEventListener('click', function(event) {
            let elementClicked = event.target;
        
            if (elementClicked.id === 'new') {
                createLists.newList();
            }

            if (elementClicked.id === 'pbj') {
                createLists.pbjList();                
            }
            if (elementClicked.id === 'work') {
                createLists.workList();
            }        
        });
    }, 
}

function startTodoLists() {
    view.displayTodos();
    view.setUpEventListeners();
    createLists.setupCreateListEventListeners();
}

//Create temp todo list for debugging and general use
todoList.todos = [{todoText: 'First todo item', completed: true}, 
                  {todoText: 'Second todo item', completed: false}, 
                  {todoText: 'Third todo item', completed: false}];

startTodoLists();                  
