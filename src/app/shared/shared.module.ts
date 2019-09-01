import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { DefaultModalComponent } from './components/default-modal/default-modal.component';
import { AutoFocusDirective } from './directives/auto-focus.directive';

const modulesList = [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, MaterialModule];
const componentList = [DefaultModalComponent, AutoFocusDirective];

@NgModule({
  declarations: componentList,
  imports: modulesList,
  exports: [...modulesList, ...componentList]
})
export class SharedModule { }
