import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminModel } from 'src/app/home/models/admin.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(admin: AdminModel) {
    return this.httpClient.post<AdminModel>(`${environment.api_url}/admin/adminlogin`, admin);
  }

}
