import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { TrendingComponent } from './trending/trending.component';
import { TreeComponent } from './tree/tree.component';
import { SummaryComponent } from './summary/summary.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { TreeNodeMobileComponent } from './tree-node-mobile/tree-node-mobile.component';

import { CommunicationService } from './communication/communication.service';
import { TreeNodeExpandedComponent } from './tree-node-expanded/tree-node-expanded.component';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { TagCloudDirective } from './tag-cloud.directive';
import {TreeService} from './tree.service';
import {SummaryService} from './summary.service';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'trending', component: TrendingComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    TrendingComponent,
    TreeComponent,
    SummaryComponent,
    TreeNodeComponent,
    TreeNodeMobileComponent,
    TreeNodeExpandedComponent,
    TagCloudDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    CommunicationService,
    ApiService,
    TreeService,
    SummaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
