import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './page/admin/admin-dashboard/admin-dashboard.component';
import { authGuard } from './core/auth.guard';
import { UserHomeComponent } from './page/user/user-home/user-home.component';
import { AdminAddBookComponent } from './page/admin/admin-add-book/admin-add-book.component';
import { AdminHomeComponent } from './page/admin/admin-home/admin-home.component';
import { UserCartComponent } from './page/user/user-cart/user-cart.component';
import { FavouriteComponent } from './page/user/favourite/favourite.component';
import { AdminAddAuthorComponent } from './page/admin/admin-add-author/admin-add-author.component';
import { UserListComponent } from './page/admin/user-list/user-list/user-list.component';
import { DetailsComponent } from './page/Vivid/details/details.component';
import { OrderHistoryComponent } from './page/admin/order-history/order-history.component';
import { UserOrderHistoryComponent } from './page/user/user-order-history/user-order-history.component';
import { UserProfileComponent } from './page/user/user-profile/user-profile.component';
import { AdminProfileComponent } from './page/admin/admin-profile/admin-profile.component';
import { FooterComponent } from './page/user/footer/footer.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'details', component: DetailsComponent },

  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'user-home', pathMatch: 'full' }, // ✅ add this
      { path: 'user-home', component: UserHomeComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'order-history', component: UserOrderHistoryComponent },
      { path: 'cart', component: UserCartComponent },
      { path: 'favorite-list', component: FavouriteComponent },
      { path: 'footer', component: FooterComponent },
      { path: '**', redirectTo: 'user-home' },
    ],
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'admin-home', pathMatch: 'full' }, // ✅ add this
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'add-book', component: AdminAddBookComponent },
      { path: 'add-author', component: AdminAddAuthorComponent },
      { path: 'order-history', component: OrderHistoryComponent },
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'user-list', component: UserListComponent },
      { path: '**', redirectTo: 'admin-home' },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
