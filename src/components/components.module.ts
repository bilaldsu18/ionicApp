import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us';
import { PagesAboutUsComponent } from './pages-about-us/pages-about-us';
import { SrcPagesAboutUsComponent } from './src-pages-about-us/src-pages-about-us';
@NgModule({
	declarations: [AboutUsComponent,
    PagesAboutUsComponent,
    SrcPagesAboutUsComponent],
	imports: [],
	exports: [AboutUsComponent,
    PagesAboutUsComponent,
    SrcPagesAboutUsComponent]
})
export class ComponentsModule {}
