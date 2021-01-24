
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

// Include all angular material related module here
const modules = [
    MatSliderModule,
    MatSelectModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AngularMaterialModule {
}