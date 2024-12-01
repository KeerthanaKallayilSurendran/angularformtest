import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  employeeName:string =""
  address:string = ""
  contactNo:string = ""
  email:string = ""
  employeeList: { name: string; address: string; contact: string; email: string }[] = [];

  addEmployee() {
    if (this.employeeName && this.address && this.contactNo && this.email) {
      this.employeeList.push({
        name: this.employeeName,
        address: this.address,
        contact: this.contactNo,
        email: this.email
      });

      this.employeeName = '';
      this.address = '';
      this.contactNo = '';
      this.email = '';
    } else {
      alert('Please fill in all the fields.');
    }
  }
}
