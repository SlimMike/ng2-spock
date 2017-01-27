import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TurnComponent } from './turn/turn.component';
import { GameComponent } from './game/game.component';
import { HexSvgComponent } from './hex-svg/hex-svg.component';
import { PlayerSelectorComponent } from './sign/selector/player-selector/player-selector.component';
import { NpcSelectorComponent } from './sign/selector/npc-selector/npc-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnComponent,
    GameComponent,
    HexSvgComponent,
    PlayerSelectorComponent,
    NpcSelectorComponent
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
