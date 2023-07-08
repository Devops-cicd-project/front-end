import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  readonly APIurl = "http://127.0.0.1:8000"; // Backend URL link from route 53 with api ex. http://api.example.site
  readonly Photourl = "http://127.0.0.1:8000/media/"; // Backend URL https://example.site/media

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/department/');
  }

  addDepartment(val:any){
    return this.http.post(this.APIurl + '/department/', val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIurl + '/department/', val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIurl + '/department/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/employee/');
  }

  addEmployee(val:any){
    return this.http.post(this.APIurl + '/employee/', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIurl + '/employee/', val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIurl + '/employee/'+val);
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIurl + '/SaveFile/', val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/department/');
  }

}
