import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  signInform: FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInform= this.fb.group({
       email: ['', [Validators.email,Validators.required]],
      //  password:['',Validators.required],
      // for multipul valitation we use double array
      password:['',[
        Validators.required,Validators.minLength(4),
      Validators.maxLength(10)]],
       skills: this.fb.group({
        skill: [''],
        yoe: [''],
        levelCheck:['']

       }),
      
 hobbies:this.fb.array([])


      
    })
    // this.signInform= new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   skills: new FormGroup({
    //    skill: new FormControl(),
    //    yoe: new FormControl(),
    //    levelCheck: new FormControl()

    //   }),




     
  //  })
  }
  
  get  hobbyControls(){
    return  (<FormArray> this.signInform.get('hobbies')).controls
    //  controls is nothing but it is we have  output console  controls to acces we covert in to array
  }
  //  const hobbyContols=  (<FormArray> this.signInform.get('hobbies')).controls

  get f(){
    return this.signInform.controls
  }
  onFormSubmit(){
    // console.log(this.signInform);
    console.log(this.signInform.value) ;
     
  }
  addHobby(){
    const control =this.fb.control('',[Validators.required]);
    (<FormArray> this.signInform.get('hobbies')).push(control)
  }
  


}
