import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesRoutingModule } from '@bcp/modules/agencies/agencies-routing';
import { AgenciesPageComponent } from '@bcp/modules/agencies/agencies-page.component';
import { AgenciesComponentsModule } from '@bcp/modules/agencies/components/agencies-components.module';
import { ComponentsModule } from '@bcp/components/components.module';

@NgModule({
	declarations: [
		AgenciesPageComponent
	],
	imports: [
		CommonModule,
		AgenciesRoutingModule,
		AgenciesComponentsModule,
		ComponentsModule
	]
})
export class AgenciesModule { }
