import { HttpClient } from '@angular/common/http';
import { Car } from './../models/car';
import { CarDetails } from '../models/carDetail';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  apiUrl="https://localhost:44389/api";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath= this.apiUrl+"/cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  GetById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/cars/getbyid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  GetCarDetials():Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"/cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  GetCarsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"/cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);

  }
}
