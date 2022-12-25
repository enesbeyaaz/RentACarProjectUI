import { CarDetails } from './../../models/carDetail';
import { CarService } from './../../services/car.service';
import { Car } from 'src/app/models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  details: CarDetails[] = [];
  dataLoaded = false;
  currentCar:Car;

  constructor(private carService: CarService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      else{
        this.GetCarDetail()
      }
    })
    this.getCars();
    this.GetCarDetail();
    console.log(this.details);
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
 
  getCarsByBrandId(brandId:number){
    this.carService.GetCarsByBrandId(brandId).subscribe((response)=>{
      this.details=response.data
      this.dataLoaded=true
    })

  }
  getById(carId: number) {
    this.carService.GetById(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  GetCarDetail() {
    this.carService.GetCarDetials().subscribe((response) => {
      this.details = response.data;
      this.dataLoaded = true;
    });
  }
}
