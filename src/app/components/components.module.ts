import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BcpButtonComponent } from './bcp-button/bcp-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BcpHeaderComponent } from './bcp-header/bcp-header.component';

const COMPONENTS = [
	BcpButtonComponent,
	BcpHeaderComponent
]

@NgModule({
	declarations: [
		...COMPONENTS,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		...COMPONENTS
	]
})
export class ComponentsModule { }
