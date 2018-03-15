import { Component, OnInit, Pipe, PipeTransform, Input, OnChanges } from '@angular/core';
import { MonitorService } from "app/monitor/monitor.service";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  providers: [MonitorService],
  styleUrls: ['./monitor.component.css'],

  template: `
   
    <div class="col col-lg-6" *ngFor="let disp of monitors">
       
        <div class="card">
            
            <table id="tableDisplay" class="table table-bordered table-striped table-striped table-sm " style="background-color: white;">
             
                <thead class="card-header thead-inverse text-center">
                    <tr style="font-size: 20px; color: black;">
                        
                        <th colspan="4">
                            {{disp.DisplaySystem}} <b style="font-size: 30px; float:right">  TOTAL : {{ disp.Items.length}} </b>
                        </th>
                       

                    </tr>
                </thead>
            
            
                <!--<thead class="card-header thead-inverse text-center">
                    <tr>
                        
                        <th>
                            Serviços
                        </th>
                        <th>
                            Data Execução
                        </th>
                        <th>
                            Hora Execução
                        </th>
                        
                        <th class="text-center">
                         Status
                        </th>

                    </tr>
                </thead>-->
                <tbody>
                    <tr  style="font-size: 20px; color: black;" *ngFor="let itens of disp.Items">
                               <b> {{itens.DisplayName}}</b> <br/>
                      <td>
                                <b>{{itens.LastStartExecution | date:'dd/MM/yyyy'}}</b>
                      
                      </td>    
                      <td>
                                <b>{{itens.LastStartExecution | date:'HH:mm:ss'}}</b>
                      </td>  
                      <td>
                           <!-- <span class=" fa fa-1x {{itens.IsAlive ? 'fa-arrow-circle-up greenyellowAlive' :'fa-arrow-circle-right yellowAlive'  }} ">  </span> -->
                           
                           <span class=" fa fa-1x {{itens.IsDestroy ? 'fa-arrow-circle-down redAlive' :itens.IsAlive ? 'fa-arrow-circle-up greenyellowAlive' :'fa-arrow-circle-right yellowAlive'  }} ">  </span>
                           

                      </td>  
                    </tr>

                </tbody>
            </table>
        </div>
        
`
   
})
export class MonitorComponent implements OnInit {
    
    monitors: Monitor[]; 

constructor(private monitorService: MonitorService) {
  
   }

   loadMonitor() {
     this.monitorService.getMonitor().subscribe((data:Monitor[]) => this.monitors = data, error => console.log(error), ()=> 
     
     
      this.monitors.forEach(element => {
           element.Items.forEach(elemntItens =>{
            
            var datas = new Date(elemntItens.LastStartExecution)
            var dataComp = new Date().getHours()
            var resp;
            
            var soma = datas.getHours() - dataComp;

            if  (soma<=-3){
                elemntItens.IsDestroy = true;
            }

           })    
     }) 
    
    );
 
  }
    
  ngOnInit() {

     setInterval(() => {
    this.loadMonitor(); 
  }, 5000);
 
}
 
}


export class Item {
       
        IdDashboardInterface: number;
        LastStartExecution: Date;
        LastEndExecution: Date;
        IdDashboardStatus: number;
        IsAlive: boolean;
        InterfaceRegister: string;
        Description: string;
        DisplayName: string;
        System: string;
        IsDestroy: boolean
       
       constructor( 
        IdDashboardInterface: number,
        LastStartExecution: Date,
        LastEndExecution: Date,
        IdDashboardStatus: number,
        IsAlive: boolean,
        InterfaceRegister: string,
        Description: string,
        DisplayName: string,
        System: string,
        IsDestroy: boolean
        ){
    
        this.IdDashboardInterface = IdDashboardInterface;
        this.LastStartExecution = LastStartExecution;
        this.LastEndExecution = LastEndExecution;
        this.IdDashboardStatus =IdDashboardStatus;
        this.IsAlive = IsAlive;
        this.InterfaceRegister = InterfaceRegister;
        this.Description = Description;
        this.DisplayName = DisplayName;
        this.System = System;
        this.IsDestroy = IsDestroy;

        }
    }

 export  class Monitor {
        DisplaySystem: string;
        Items: Item[]
     constructor( 
        DisplaySystem: string,
        Items: Item[]
     ){
       this.DisplaySystem = DisplaySystem;
       this.Items = Items;       
     }
    }


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}