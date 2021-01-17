
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

// Include all angular material related module here
const modules = [
    MatSliderModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class AngularMaterialModule {
}