import { NgModule } from '@angular/core';

import { TestdlSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TestdlSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TestdlSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestdlSharedCommonModule {}
