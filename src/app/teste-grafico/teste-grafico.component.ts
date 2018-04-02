import { Component, OnInit, AfterViewInit  } from '@angular/core';
import * as Chart from 'chart.js';
import { ProdutoService } from './produto.service';
import { Intefaces } from './Intefaces';

@Component({
  selector: 'app-teste-grafico',
  providers : [ProdutoService],
  templateUrl: './teste-grafico.component.html',
  styleUrls: ['./teste-grafico.component.css']
})
export class TesteGraficoComponent implements AfterViewInit , OnInit {

  intefaces : Intefaces[];

  canvas: any;
  ctx: any;

  constructor(private produtoService: ProdutoService) { }


  loadMonitor() {
    // this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext('2d');
    // let myChart = new Chart(this.ctx, {
    //   type: 'pie',
    //   data: {
    //       labels: ['New', "In Progress", "On Hold"],
    //       datasets: [{
    //           label: '# of Votes',
    //           data: [1,2,3],
    //           backgroundColor: [
    //               'rgba(255, 99, 132, 1)',
    //               'rgba(54, 162, 235, 1)',
    //               'rgba(255, 206, 86, 1)'
    //           ],
    //           borderWidth: 1
    //       }]
    //   },
    //   options: {
    //     responsive: false,
    //     display:true
    //   }
    // });
 
    let arr5: Array<number> = new Array();
    
    this.produtoService.getMonitor().subscribe((data:Intefaces[]) => this.intefaces = data, error => console.log(error), ()=> 
     this.intefaces.forEach(element => {
      console.log(element.Interface);
    })

   );

   let i : number;

   console.log(this.intefaces);

   for (i = 0; i < arr5.length; i++) {
      console.log(arr5[i]);
   }


   this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      let myChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
            labels: ['CHG', 'STG_CHG'],
            datasets: [{
                label: '# of Votes',
                data: arr5,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          display:true
        }
      });

  }


  ngOnInit() {
    //this.loadMonitor();
  }

  ngAfterViewInit() {
     this.loadMonitor();
  }

}
