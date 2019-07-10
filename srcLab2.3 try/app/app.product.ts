import { Component } from "@angular/core";

@Component({
  selector: 'prod',
  templateUrl: 'product.html'
})
export class Product {

    prodId:number;
    prodName:string;
    prodCost:number;
    prodOnline:string;
    prodCategory:string;
    prodStore:string="";
    prodStore1:boolean;
    prodStore2:boolean;
    prodStore3:boolean;
    prodStore4:boolean;

    answer:string;

    

    //prodAll:any[]=[];
    addProduct(){
    if(this.prodStore1)
    {
      this.prodStore = this.prodStore + " " + "Big Bazar";
    }
    
    if(this.prodStore2)
    {
      this.prodStore = this.prodStore + " " + "DMart";
    }
    if(this.prodStore3)
    {
      this.prodStore = this.prodStore + " " + "Reliance";
    }
    if(this.prodStore4)
    {
      this.prodStore = this.prodStore + " " + "Mega Store";
    }
      //alert(this.prodId+" "+this.prodName+" "+this.prodCost+" "+this.prodOnline+" "+this.prodCategory+" "+this.prodStore)
      this.answer=this.prodId+" "+this.prodName+" "+this.prodCost+" "+this.prodOnline+" "+this.prodCategory+" "+this.prodStore;
    } 

}
