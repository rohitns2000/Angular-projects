import { Component } from "@angular/core";
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'search-comp',
    templateUrl:'searchemployee.html'
})
export class SearchEmployeeComponent{
    constructor(private myservice:EmployeeService){}
    empDetails:number;
    empAll:any[]=[];
    empSearched:string=null;

    ngOnInit(): void {
        //this.myservice.getAllEmployee().subscribe((data:any)=>this.empAll=data)
        this.empAll=this.myservice.getAllEmployee();
        // this.empAll.push()
        // this.store(this.empAll.push())
    }

    findEmployee(){
        //alert("Hello!!!")
        for(let data of this.empAll)
        {
            if(this.empDetails==data.empId)
            {
                // alert("The Employee Details Are:Id "+data.empId+" Name:"+data.empName+" Salary:"+data.empSalary+" Department:"+data.empDepartment)
                // alert("The Employee Details Are:"+data.empId)
                // alert("The Employee Details Are:"+data.empName)
                // alert("The Employee Details Are:"+data.empSalary)
                // alert("The Employee Details Are:"+data.empDepartment)
                this.empSearched="The Employee Details Are:Id "+data.empId+" Name:"+data.empName+" Salary:"+data.empSalary+" Department:"+data.empDepartment
                // alert(this.empSearched)

            }

        }

        if(this.empSearched == null)
        {
            alert("Employee Doesn't Exists!!!")
        }
        else{
            alert(this.empSearched)
        }
    
    }

}