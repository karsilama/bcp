import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingRoutingModule } from '@bcp/modules/loading/loading-routing';
import { LoadingPageComponent } from '@bcp/modules/loading/loading-page.component';
import { LoadingComponentsModule } from './components/loading-component.module';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [
		LoadingPageComponent
	],
	imports: [
		CommonModule,
		NgbProgressbarModule,
		LoadingComponentsModule,
		LoadingRoutingModule
	]
})
export class LoadingModule { }
