import { Component,OnInit } from "@angular/core";
import {BookService} from "./app.bookservice"

@Component({
    selector:'add-comp',
    templateUrl:'addbooks.html'
})
export class AddBooksComponent implements OnInit{

    constructor(private service:BookService){}

    empAll:any[]=[];

    ngOnInit(){
        this.service.getAllBooks().subscribe((data:any)=>this.empAll=data);//or this.service.getAllEmployee().subscribe((data)=>this.empAll.push(data));
    }

    bookDelete(i){
        this.empAll.splice(i,1);
    }

}