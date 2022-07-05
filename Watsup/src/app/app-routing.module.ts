import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { TradingComponent } from './trading/trading.component';
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'account', component: AccountComponent},
  { path: 'trading', component: TradingComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent},
  {path: 'change_password', component: ChangePasswordComponent},
  {path: 'change_info', component: ChangeInfoComponent},
  {path : 'statistique', component: StatistiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
