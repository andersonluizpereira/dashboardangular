import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MonitorComponent } from './monitor/monitor.component';
import { Configuration } from './monitor/monitor.service';
import { TesteGraficoComponent } from './teste-grafico/teste-grafico.component';
import { ConfigurationProduto } from './teste-grafico/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    MonitorComponent,
    TesteGraficoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Configuration, ConfigurationProduto],
  bootstrap: [AppComponent]
})
export class AppModule { }
