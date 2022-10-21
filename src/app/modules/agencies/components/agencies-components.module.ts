import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesListComponent } from '@bcp/modules/agencies/components/agencies-list/agencies-list.component';
import { MapComponent } from '@bcp/modules/agencies/components/map/map.component';
import { ComponentsModule } from '@bcp/components/components.module';
import { MoreBtnComponent } from './more-btn/more-btn.component';
import { GoogleMapsModule } from '@angular/google-maps';

const COMPONENTS = [
	AgenciesListComponent,
	MapComponent,
	MoreBtnComponent
]

@NgModule({
	declarations: [
		...COMPONENTS
	],
	imports: [
		CommonModule,
		ComponentsModule,
		GoogleMapsModule
	],
	exports: [
		...COMPONENTS
	]
})
export class AgenciesComponentsModule { }
