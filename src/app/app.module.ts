import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {OutputsComponent} from './outputs/outputs.component';
import {HttpClientModule} from '@angular/common/http';
import {CraftingParentComponent} from './crafting-parent/crafting-parent.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    IngredientsComponent,
    OutputsComponent,
    CraftingParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
