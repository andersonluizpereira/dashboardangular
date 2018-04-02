import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';

import { Observable } from "rxjs/Observable";
import { Intefaces } from './Intefaces';

@Injectable()
export class ConfigurationProduto {
     public Server: string = 'http://hsqlwebdev:8095/totvs/';
     public ApiUrl: string = '/all';
    // public Server: string = 'http://localhost:3412/';
    // public ApiUrl: string = 'users/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class ProdutoService {

  private actionUrl: string;
  private headers: Headers;
  private obj :any;

 constructor(private _http: Http, private _configuration: ConfigurationProduto) {
      this.actionUrl = _configuration.ServerWithApiUrl ;
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  public getMonitor(): Observable<Intefaces[]>{
  return  this._http.get(this.actionUrl).map(this.extractData)
  }

  private extractData(res: Response)  {
    let body =  res.json();
    let corpo = body || {};
    return body || {};

}

private handleError (error: any) {
       let errMsg = (error.message) ? error.message :
         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
       console.error(errMsg); // log to console instead
       return Observable.throw(errMsg);
   }

}
