import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighlightsDirective } from './basic_highlights/basic-highlights.directive';
import { BetterHighlghtsDirective } from './better-directives-highlights/better-highlghts.directive';
import { HostDirective } from './better-directives-highlights/host.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightsDirective,
    BetterHighlghtsDirective,
    HostDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
