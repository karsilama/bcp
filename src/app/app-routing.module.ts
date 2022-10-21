import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BCP_ROUTES } from './constants/routes.constant';

const routes: Routes = [
	{
		path: BCP_ROUTES.LOADING,
		loadChildren: () => import('@bcp/modules/loading/loading.module').then(m => m.LoadingModule)
	},
	{
		path: BCP_ROUTES.AGENCIES,
		loadChildren: () => import('@bcp/modules/agencies/agencies.module').then(m => m.AgenciesModule)
	},
	{
		path: `${BCP_ROUTES.AGENCY_DETAIL}/:lat/:lng`,
		loadChildren: () => import('@bcp/modules/agency-detail/agency-detail.module').then(m => m.AgencyDetailModule)
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: BCP_ROUTES.LOADING
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
