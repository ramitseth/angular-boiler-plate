import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

const modulesList = [MatInputModule, MatSelectModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatSnackBarModule, MatPaginatorModule];

@NgModule({
  imports: modulesList,
  exports: modulesList
})
export class MaterialModule { }
