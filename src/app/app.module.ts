import { SpecialistsService } from './services/specialists.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialistDetailsComponent } from './specialist-details/specialist-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecialistsComponent } from './specialists/specialists.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NavComponent,
    SearchComponent,
    FooterComponent,
    SpecialistDetailsComponent,
    NotFoundComponent,
    SpecialistsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SpecialistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
