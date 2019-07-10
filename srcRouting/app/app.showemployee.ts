import { Component,OnInit } from "@angular/core";
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent {


    
    // empId:number;
    // empName:string;
    // empSalary:number;
    // empDepartment:string;
    empAll:any[]=[];
    // static storeInMe:any;

    constructor(private myservice:EmployeeService)
    {
        // // this.empId = myservice.getId();
        // // this.empName = myservice.getName();
        // // this.empSalary = myservice.getSalary();
        // // this.empDepartment = myservice.getDepartment();
        // // alert(this.empId)
        // // this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
        // this.myservice.myMethod$.subscribe((data)=>{
        //     this.empAll=data;
        // }
        // )
    }
    // store(emp):any{
    //     ShowEmployeeComponent.storeInMe=emp[0];
    // }

    ngOnInit(): void {
        //this.myservice.getAllEmployee().subscribe((data:any)=>this.empAll=data)
        this.empAll=this.myservice.getAllEmployee();
        this.empAll.push()
        // this.store(this.empAll.push())
    }


    
}