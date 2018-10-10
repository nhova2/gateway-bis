import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            /* { path: '', loadChildren: 'app/pages/home/home.module#HomeModule' }, */
            { path: 'account', loadChildren: 'app/pages/account/account.module#AccountModule', data: { breadcrumb: 'Account Settings' } },
            { path: 'compare', loadChildren: 'app/pages/compare/compare.module#CompareModule', data: { breadcrumb: 'Compare' } },
            { path: 'wishlist', loadChildren: 'app/pages/wishlist/wishlist.module#WishlistModule', data: { breadcrumb: 'Wishlist' } },
            { path: 'cart', loadChildren: 'app/pages/cart/cart.module#CartModule', data: { breadcrumb: 'Cart' } },
            { path: 'checkout', loadChildren: 'app/pages/checkout/checkout.module#CheckoutModule', data: { breadcrumb: 'Checkout' } },
            { path: 'contact', loadChildren: 'app/pages/contact/contact.module#ContactModule', data: { breadcrumb: 'Contact' } },
            { path: 'sign-in', loadChildren: 'app/pages/sign-in/sign-in.module#SignInModule', data: { breadcrumb: 'Sign In ' } },
            { path: 'brands', loadChildren: 'app/pages/brands/brands.module#BrandsModule', data: { breadcrumb: 'Brands' } },
            { path: '', loadChildren: 'app/pages/products/products.module#ProductsModule', data: { breadcrumb: 'All Products' } } ,
            { path: 'domaine', loadChildren: 'app/pages/domain/domain.module#DomainModule', data: { breadcrumb: 'domaines' } },
            { path: 'enchere', loadChildren: 'app/pages/enchere/enchere.module#EnchereModule', data: { breadcrumb: 'encheres' } },
            { path: 'produit', loadChildren: 'app/pages/produit/produit.module#ProduitModule', data: { breadcrumb: 'produits' } },
            { path: 'service', loadChildren: 'app/pages/service/service.module#ServiceModule', data: { breadcrumb: 'service ' } }

    ]
    },
    {
        path: '',
        component: MainComponent, children: [
            { path: '', loadChildren: 'app/main/admin/admin.module#AdminModule' },
            { path: 'admin', loadChildren: 'app/main/admin/admin.module#AdminModule', data: { breadcrumb: '' } },
            { path: 'follow', loadChildren: 'app/main/follow/follow.module#FollowModule', data: { breadcrumb: 'Suivi Historique' } }
        ]
    },
    { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
});