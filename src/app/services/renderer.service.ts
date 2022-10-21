import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { LAYOUT_DESKTOP, LAYOUT_MOBILE } from '@bcp/constants/layouts.constant';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RendererService {
	private renderer: Renderer2;

	constructor(
		private rendererFactory: RendererFactory2
	) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	public setBodyClass(): void {
		const mainClass = window.innerWidth >= environment.breakpoints.sm ? LAYOUT_DESKTOP : LAYOUT_MOBILE;
		this.renderer.setAttribute(document.body, 'class', mainClass)
	}
}
