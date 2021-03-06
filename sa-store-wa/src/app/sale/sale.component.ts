import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  num=0;
  parentCount = 0;
  constructor(
    private saleService: SaleService,
    private http: Http
  ) { }

  ngOnInit() {

  }
  ngOnChange() {

    }

  buyProduct(user_id, product_id) {
    this.saleService.buyProduct(user_id, product_id).subscribe(res => {
      console.log(res); console.log("producto");
    })
  }
}
