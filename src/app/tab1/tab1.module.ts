import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CardsComponent } from '../components/cards/cards.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Tab1Page, HeaderComponent, FormComponent, CardsComponent, ModalComponent]
})
export class Tab1PageModule {}
