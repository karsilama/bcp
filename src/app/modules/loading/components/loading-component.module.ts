import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLoadingComponent } from './default-loading/default-loading.component';

const COMPONENTS = [
	DefaultLoadingComponent
]

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [
		CommonModule
	],
	exports: [
		...COMPONENTS
	]
})
export class LoadingComponentsModule { }
