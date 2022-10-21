import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesPageComponent } from '@bcp/modules/agencies/agencies-page.component';

const routes: Routes = [
	{
		path: '',
		component: AgenciesPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AgenciesRoutingModule { }
