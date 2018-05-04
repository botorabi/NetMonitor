import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatToolbarModule
} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

const modules = [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
