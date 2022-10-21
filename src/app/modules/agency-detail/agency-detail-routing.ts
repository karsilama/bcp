import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyDetailPageComponent } from './agency-detail-page.component';

const routes: Routes = [
	{
		path: '',
		component: AgencyDetailPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AgenciesRoutingModule { }
