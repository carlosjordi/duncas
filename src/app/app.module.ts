import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HeroCreationComponent } from './hero-creation/hero-creation.component';
import { WeaponPickComponent } from './weapon-pick/weapon-pick.component';
import { DungeonOneComponent } from './dungeon-one/dungeon-one.component';
import { HeroOverviewComponent } from './hero-overview/hero-overview.component';
import { MonsterOverviewComponent } from './monster-overview/monster-overview.component';
import { BattleOverviewComponent } from './battle-overview/battle-overview.component';
import { BattleResultComponent } from './battle-result/battle-result.component';
import { DungeonTwoComponent } from './dungeon-two/dungeon-two.component';
import { PocketComponent } from './pocket/pocket.component';
import { StoreComponent } from './store/store.component';
import { DungeonThreeComponent } from './dungeon-three/dungeon-three.component';
import { ThanksComponent } from './thanks/thanks.component';
import { BasicsComponent } from './basics/basics.component';
import { VersionComponent } from './version/version.component';
import { V2Component } from './v2/v2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroCreationComponent,
    WeaponPickComponent,
    DungeonOneComponent,
    HeroOverviewComponent,
    MonsterOverviewComponent,
    BattleOverviewComponent,
    BattleResultComponent,
    DungeonTwoComponent,
    PocketComponent,
    StoreComponent,
    DungeonThreeComponent,
    ThanksComponent,
    BasicsComponent,
    VersionComponent,
    V2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
