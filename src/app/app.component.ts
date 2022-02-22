import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum:any;
  amount:any;
  total:any;
  title = 'demo_shopping_cart';
  iphone13=new iphone("Iphone 13 pro max",39990000,"https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/09/15/image-removebg-preview-15.png",0,0);
  iphone12=new iphone("Iphone 12 pro max",32990000,"https://hc.com.vn/i/ecommerce/media/GS.006192_FEATURE_72064.png",0,0);
  iphone11=new iphone("Iphone 11 pro max",19990000,"https://www.viettablet.com/images/thumbnails/480/516/detailed/36/iphone-11-pro-max-space-grey.jpg",0,0);
  iphones:iphone[]=[];
  addToCart(name:string,price:number,image:any){
    console.log("asd");
    if(this.iphones.length!=0){
      //trong giỏ hàng có sản phẩm 
      for(var i=0;i<this.iphones.length;i++){
            //đã có sản phẩm này trong giỏ hàng
            if(this.iphones[i].name==name){
              this.iphones[i].amount+=1;
              this.iphones[i].total+=price; 
              break;
            }  
              if(i==this.iphones.length-1){
                //chưa có sản phẩm này trong giỏ hàng
                 this.iphones.push({
                  name:name,
                  price:price,
                  image:image,
                  amount:1,
                  total:price});
                 break;
              }
          }
          for(var i=0;i<this.iphones.length;i++){

          }
    }else {
      //chưa có sản phẩm nào trong giỏ hàng
      this.iphones.push({
        name:name,
         price:price,
         image:image,
         amount:1,
         total:price});
    }
    this.sum=0;
    for(var i=0;i<this.iphones.length;i++){
      this.sum+=this.iphones[i].total;
    }
  }
  
    
    
  
  subAmount(name:any){
  for(var i=0;i<this.iphones.length;i++){
    if(this.iphones[i].name==name){
      if(this.iphones[i].amount>1){
        this.iphones[i].amount-=1;
        this.iphones[i].total-=this.iphones[i].price;
      }
      else this.iphones.splice(i,1);

    }
  }
  this.sum=0;
    for(var i=0;i<this.iphones.length;i++){
      this.sum+=this.iphones[i].total;
    }
  }
  sumAmount(name:any){
    for(var i=0;i<this.iphones.length;i++){
      if(this.iphones[i].name==name){
        this.iphones[i].amount+=1;
        this.iphones[i].total+=this.iphones[i].price;
      }
    }
    this.sum=0;
    for(var i=0;i<this.iphones.length;i++){
      this.sum+=this.iphones[i].total;
    }
  }
  
}
export class iphone{
  name!:string;
  price!:number;
  image!:any;
  amount!:any;
  total!:any;
  constructor(name:string,price:number,image:any,amount:any,total:any){
     this.name=name;
     this.price=price;
     this.image=image;
     this.amount=amount;
     this.total=total;
  }
}