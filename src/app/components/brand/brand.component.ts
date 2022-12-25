import { Brand } from './../../models/brand';
import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[];
  dataLoaded=false;
  currentBrand:Brand;
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    console.log(this.currentBrand)
  }

  getBrands(){
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;

    })
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    console.log(this.currentBrand)
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else  return "list-group-item"
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }
    else return "list-group-item "
  }

}
