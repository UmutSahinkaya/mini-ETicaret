import {
  AlertifyService,
  MessageType,
  Position,
} from './../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  _MatTableDataSource,
  MatTableDataSource,
} from '@angular/material/table';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
import { ProductService } from 'src/app/services/common/models/product.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent implements OnInit {
  constructor(
    private alertifService: AlertifyService,
    spinner: NgxSpinnerService,
    private productService: ProductService
  ) {
    super(spinner);
  }

  displayedColumns: string[] = [
    'name',
    'stock',
    'price',
    'createdDate',
    'updatedDate',
    'edit',
    'delete'
  ];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getproducts() {
    this.showSpinner(SpinnerType.BallAtom);
    const allProducts: { totalCount: number; products: List_Product[] } =
      await this.productService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        () => this.hideSpinner(SpinnerType.BallAtom),
        (errorMessage) =>
          this.alertifService.message(errorMessage, {
            dismissOther: true,
            messageType: MessageType.Error,
            position: Position.TopRight,
          })
      );
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
  }
 
  async pageChanged(){
    await this.getproducts();
  }
  async ngOnInit() {
    await this.getproducts();
  }
}
