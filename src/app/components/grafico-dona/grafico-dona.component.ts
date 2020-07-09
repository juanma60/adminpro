import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType, ChartLegendItem } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  @Input() public ChartLabels: string[] = [];
  @Input() public ChartData: number[] = [];
  @Input() public ChartType: string = '';
  // @Input() public doughnutChartLabels: Label[] = ['Ventas onLine', 'Venta Mostrador', 'Venta Correo'];
  // @Input() public doughnutChartData: MultiDataSet = [ [350, 450, 100], ];
  // @Input() public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void { }

}
