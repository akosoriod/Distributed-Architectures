import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  list;
  constructor(
    private saleService: SaleService,
    private http: Http
  ) { }

  ngOnInit() {
   this.list= this.searchSales(2);

  }


  searchSales(user_id) {
    let result=[]
    this.saleService.searchSales2().subscribe(res => {
     for (let i=0;i<res.length;i++) {
      if(res[i].user_id==user_id){
        result.push(res[i]);
      }
     }
     console.log(result);
    });
    return result
  }

  buyProduct(user_id, product_id) {
    this.saleService.buyProduct(user_id, product_id).subscribe(res => {
      console.log(res)
    })
  }
}
