import { Brand } from './../models/brand';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44389/api";
  constructor(private httpClient:HttpClient) { }

  getBrand():Observable<ListResponseModel<Brand>>{
    let newPath= this.apiUrl+"/brands/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
