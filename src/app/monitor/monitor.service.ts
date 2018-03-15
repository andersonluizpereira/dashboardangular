import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import { Monitor } from "app/monitor/monitor.component";
import { Observable } from "rxjs/Observable";

@Injectable()
export class Configuration {
     public Server: string = 'http://hsqlweb01:8065/';
     public ApiUrl: string = 'dashboard/GetAllJsons';
    // public Server: string = 'http://localhost:3412/';
    // public ApiUrl: string = 'users/';
   
   
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}


@Injectable()
export class MonitorService {
   
    private actionUrl: string;
    private headers: Headers;
    private obj :any;

   constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl ;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getMonitor(): Observable<Monitor[]>{
    return  this._http.get(this.actionUrl).map(this.extractData)
    }




   private extractData(res: Response)  {
     let body =  res.json();
     let corpo = body || {};
     return JSON.parse(body || {});

 }


private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
        
    }

}
