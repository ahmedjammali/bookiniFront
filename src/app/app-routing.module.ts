import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AhmedComponent } from './admin/categories/ahmed.component';
import { AllPostComponent } from './admin/posts/all-post/all-post.component';
import { NewPostComponent } from './admin/posts/new-post/new-post.component';
import { AuthGuard } from './admin/services/auth.guard';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { ContactComponent } from './admin/contact/contact.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';


const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'category/:category/:id',component : SingleCategoryComponent},
  {path : 'post/:id/:category/:id2',component : SinglePostComponent},
  {path : 'about',component : AboutUsComponent},
  {path : 'term-conditions',component : TermsAndConditionsComponent},
  {path : 'contact',component : ContactUsComponent},
  {path : 'login',component : LoginComponent},
  {path : 'signup',component : SignupComponent},
  {
    path: 'admin',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'ahmed', component: AhmedComponent },
      { path: 'posts', component: AllPostComponent },
      { path: 'posts/new', component: NewPostComponent },
      { path: 'subscribers', component: SubscribersComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'comments', component: CommentsComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
