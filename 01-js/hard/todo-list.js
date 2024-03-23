/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
constructor(){
 this.arr=[];
}
add(todo){
this.arr.push(todo);
}
remove(i){
this.arr.splice(i,1);
}
update(i,todo){
  if(i>= this.arr.length){
    console.error("Index out of bounds");

  }
  else{
    this.arr[i]=todo;
  }
  
}
getAll(){
  return this.arr;
}
get(i){
  if(i>=this.arr.length){
    return null;
  }
  else{
    return this.arr[i];
  }
  
}
clear(){
this.arr=[];
}

}

module.exports = Todo;
