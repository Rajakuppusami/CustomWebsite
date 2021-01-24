
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';

// Include all angular material related module here
const modules = [
    MatSliderModule,
    MatSelectModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AngularMaterialModule {
}