import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HouseKeeping } from '../models/houseKeeping.model';
// import { HouseKeeping } from '../models/houseKeeping.model';
// import { HouseKeeping } from '../models/houseKeeping.model';


@Injectable({
  providedIn: 'root'
})
export class HouseKeepingsService {

  baseUrl='https://localhost:7171/api/houseKeepings'

  constructor(private http: HttpClient) { }

  //get all data

  getAllHouseKeepings():Observable<HouseKeeping[]>
  {
   return this.http.get<HouseKeeping[]>(this.baseUrl);
  }
 

  addHouseKeeping(houseKeeping:HouseKeeping):Observable<HouseKeeping>{
  houseKeeping.id='00000000-0000-0000-0000-000000000000';
   return this.http.post<HouseKeeping>(this.baseUrl,houseKeeping);
  }

  deleteHouseKeeping(id:string):Observable<HouseKeeping>
  {
     return this.http.delete<HouseKeeping>(this.baseUrl + '/' + id);
  }
  updateHouseKeeping(houseKeeping:HouseKeeping):Observable<HouseKeeping>
  {
    return this.http.put<HouseKeeping>(this.baseUrl + '/' +houseKeeping.id,houseKeeping)
  }

  getCurrentData(id:string):Observable<HouseKeeping>{
    return this.http.get<HouseKeeping>(this.baseUrl + '/' + id)
  }
}
