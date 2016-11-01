import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if (Number.isNaN(id) || id < 1) {
            alert('Invalid product id');
            this._router.navigate(['products']);

            return false;
        }

        return true;
    }
}
