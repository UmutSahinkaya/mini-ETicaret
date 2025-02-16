import { HttpClientService } from './../../../services/common/http-client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService } from 'src/app/services/admin/alertify.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    /* this.httpClientService
    //   .get<Product[]>({ controller: 'products' })
    //   .subscribe((data) => console.log(data));

    // this.httpClientService.post(
    //   { controller: 'products' },
    //   { name: 'Kalem', stock: 100, price: 15 }
    // ).subscribe();
    
    // this.httpClientService.put(
    //   { controller: 'products' },
    //   {
    //     id: '6f8e9af1-8862-4134-af41-e46dcbeb735f',
    //     name:"Renkli Kağıt",
    //     stock:1500,
    //     price:5.5
    //   }
    // ).subscribe();

    // this.httpClientService
    //   .delete(
    //     { controller: 'products' },
    //     'fe663985-495c-419f-89c1-308e4df834b6'
    //   )
    //   .subscribe();*/
  }

  @ViewChild(ListComponent) listComponent :ListComponent
  createdProduct(createdProduct:Create_Product){
    this.listComponent.getproducts();
  }
}
