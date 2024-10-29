import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'; 
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AhmedComponent } from './admin/categories/ahmed.component';
import { AllPostComponent } from './admin/posts/all-post/all-post.component';
import { NewPostComponent } from './admin/posts/new-post/new-post.component';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { ContactComponent } from './admin/contact/contact.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';




const firebase = {
  apiKey: "AIzaSyCPPRd8_aawMP3_Q1WZWZiKWDTpti13HrA",
  authDomain: "ang-blog-c9748.firebaseapp.com",
  projectId: "ang-blog-c9748",
  storageBucket: "ang-blog-c9748.appspot.com",
  messagingSenderId: "784208477371",
  appId: "1:784208477371:web:47290b46144606bd963d9e"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionsComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    PostCardComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent,
    LoginAdminComponent,
    DashboardComponent,
    AhmedComponent,
    AllPostComponent,
    NewPostComponent,
    LoginComponent,
    SubscribersComponent,
    ContactComponent,
    CommentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebase)),
    provideFirestore(() => getFirestore()),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
