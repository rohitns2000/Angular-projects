import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";  
import { Router } from "@angular/router";

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
    constructor(private myService: EmployeeService, private router:Router){}
    
    myallData:any;
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    addData(){
        this.myallData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        if(this.myService.addEmployee(this.myallData)){
            this.router.navigate(['show']);
        }
    }
    // empAll:any[]=[{empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}];

   

    
    // empAll[0] ={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
    //MyData:any="Hello";
    // data:any[] = this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment});


    
    // status:boolean=false;
    // empty:boolean=true;
    // constructor(emp:EmployeeService)
    // {
    //     // this.empAll[0] ={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
    //     // this.status=!this.status;
    //     // this.empty=false
    //    // emp.setEmployee(this.empId,this.empName,this.empSalary,this.empDepartment);
    // }

    // toService(){

    // }

    
}