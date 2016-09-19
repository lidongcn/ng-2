import './rxjs-extensions';

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard.component'
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';
import { routing }             from './app.routing';

@NgModule({
  /**
   * 本模块由其它模块导出的类。
   */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  /**
   * 本模块中拥有的视图类,包含components,directives,pips。
   */
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  /**
   *  服务 的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。
   */
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
