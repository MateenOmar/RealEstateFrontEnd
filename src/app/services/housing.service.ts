import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { IPropertyBase } from '../model/IPropertyBase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(SellRent: Number): Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data=>{
        const propertiesArray: Array<IPropertyBase> = [];
        for (const id in data){
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
