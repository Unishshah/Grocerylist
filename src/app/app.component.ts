import { Component,Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
  
})

export class AppComponent {
   todoArray=[]
   
   addTodo(value){
    this.todoArray.push(value)
    console.log(this.todoArray)
    }
    
    deleteItem(todo){
   for(let i=0 ;i<= this.todoArray.length ;i++){
    if(todo== this.todoArray[i]){
     this.todoArray.splice(i,1)
    }
   }
  }
  
  todoSubmit(value:any){
     if(value!==""){
    this.todoArray.push(value.todo)
     //this.todoForm.reset()
    }else{
      alert('Field required **')
    }
}


}
