import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SaleService } from '../sale.service';
import { Http, Request, RequestMethod, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  @Input()  id = 0;
  @Output() result = new EventEmitter<number>();
  list;
  consult(id_user) {
    this.id=id_user;
    this.result.emit(this.id);
    this.list=this.searchSales(this.id);
  }
  constructor(  private saleService: SaleService,
    private http: Http
    ) {  }

  ngOnInit() {
  }

  searchSales(user_id) {
    let result=[]
    this.saleService.searchSales().subscribe(res => {
     for (let i=0;i<res.length;i++) {
      if(res[i].user_id==user_id){
        result.push(res[i]);
      }
     }
     console.log(result);console.log("busqueda");
    });
    return result
  }
}
