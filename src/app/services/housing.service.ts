import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Property } from '../model/Property';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>(this.baseURL + '/city/cities');
  }

  getProperty(ID: number) {
    return this.getAllProperties().pipe(
      map((propertiesArray) => {
        //throw new Error('Some Error!');
        return propertiesArray.find((p) => p.ID === ID);
      })
    );
  }

  getAllProperties(SellRent?: Number): Observable<Property[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp')!);

        if (localProperties) {
          for (const id in localProperties) {
            if (SellRent) {
              if (
                localProperties.hasOwnProperty(id) &&
                localProperties[id].SellRent === SellRent
              ) {
                propertiesArray.push(localProperties[id]);
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for (const id in data) {
          if (SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
    let newProp = [property];

    if (localStorage.getItem('newProp')) {
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp')!)];
    }
    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID')! + 1));
      return +localStorage.getItem('PID')!;
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
