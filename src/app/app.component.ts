import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup = new FormGroup({ goal: new FormControl('') });
  goals: string[] = [];

  constructor() { }

  onAddGoal(): void {
    this.goals.push(this.form.value.goal);
    console.log('goals', this.goals)
  }

  onDeleteGoal(indexOfItemToBeDeleted: number): void {
    this.goals = this.goals.filter((goal, index)=>{
      if (index.toString() !== indexOfItemToBeDeleted.toString()) {
        return goal;
      } 

      return
    })
  }
}
