import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectorComponent } from './sign/selector/selector.component';
import { TurnComponent } from './turn/turn.component';
import { GameComponent } from './game/game.component';
import { HexSvgComponent } from './hex-svg/hex-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TurnComponent,
    GameComponent,
    HexSvgComponent
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
