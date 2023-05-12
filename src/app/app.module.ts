
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {ReactiveFormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { SearchFilterPipe } from './search-filter.pipe';
import { HelpsComponent } from './helps/helps.component';
import { PriceComponent } from './price/price.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AssetComponent } from './asset/asset.component';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  {path:'home',component: HomeComponent },
  {path:'subb',component: SubjectComponent },
  {path:'price',component: PriceComponent },
  {path:'helpss',component: HelpsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubjectComponent,
    SearchFilterPipe,
    HelpsComponent,
    PriceComponent,
    SearchBoxComponent,
    SearchResultComponent,
    AssetComponent
  ],
  imports: [
    BrowserModule,MatTableModule,
    AppRoutingModule,
    BrowserAnimationsModule,NgxPaginationModule,
    MatIconModule,
    MatExpansionModule,MatButtonModule,
    MatMenuModule,RouterModule.forRoot(routes),
    ReactiveFormsModule,MatToolbarModule,MatSidenavModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  
 }
