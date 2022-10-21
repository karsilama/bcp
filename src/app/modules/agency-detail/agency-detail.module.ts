import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesRoutingModule } from '@bcp/modules/agency-detail/agency-detail-routing';
import { AgencyDetailPageComponent } from './agency-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@bcp/components/components.module';

@NgModule({
	declarations: [
		AgencyDetailPageComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ComponentsModule,
		ReactiveFormsModule,
		AgenciesRoutingModule
	]
})
export class AgencyDetailModule { }
