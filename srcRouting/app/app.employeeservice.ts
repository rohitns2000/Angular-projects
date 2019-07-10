import { Injectable, Input} from "@angular/core";
import{HttpClient} from '@angular/common/http'
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){
        // this.myMethod$ = this.myMethodSubject.asObservable();
    }

    empAll:any[]=[{empId:1001,empName:"uuu",empSalary:111,empDepartment:"java"},
    {empId:1002,empName:"fuu",empSalary:711,empDepartment:".Net"},
    {empId:1003,empName:"duu",empSalary:181,empDepartment:"Lol"}];

    // $http:any;
    // $http:({ url:"emp", method: "GET",data: empAll }): {
    //     url: any;
    //     method: any;
    //     GET: any;
    //     data:empAll;
    // }): any
    // empId:number;
    // empName:string;
    // empSalary:number;
    // empDepartment:string;

   

    getAllEmployee(){
       //return this.http.get("assets/employee.json");
    //    return this.http.get("this.empAll")
    return this.empAll;
    }

    addEmployee(data:any){
        this.empAll.push(data)
        return true;
    }

    // myMethod(data){
    //     console.log(data);
    //     this.myMethodSubject.next(data);
    // }
  
//   setEmployee(empId,empName,empSalary,empDepartment) {  
//     //debugger;  
//     this.empId=empId;
//     this.empName=empName;
//     this.empSalary=empSalary;
//     this.empDepartment=empDepartment;
//     // this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
//     //  alert(this.empId)
//   }  
  
//   getId():any {  
//     return this.empId;  
//   }
//   getName():any {  
//     return this.empName;  
//   }
//   getSalary():any {  
//     return this.empSalary;  
//   }
//   getDepartment():any {  
//     return this.empDepartment;  
//   }

}