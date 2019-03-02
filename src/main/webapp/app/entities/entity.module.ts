import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'category',
                loadChildren: './category/category.module#TestdlCategoryModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#TestdlProductModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#TestdlCustomerModule'
            },
            {
                path: 'address',
                loadChildren: './address/address.module#TestdlAddressModule'
            },
            {
                path: 'wish-list',
                loadChildren: './wish-list/wish-list.module#TestdlWishListModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestdlEntityModule {}
