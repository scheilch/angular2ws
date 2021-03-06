// System Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from "@angular/platform-browser";

// Routing
import { RouterModule } from "@angular/router";
import { rootRouterConfig } from "./app.routes";

// Application Components
import { AppComponent } from "./app";
import { NavbarComponent } from "./navbar/navbar.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { PostsComponent } from "./posts/posts.component";

// Application Modules
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AgendaComponent, PostsComponent],
  imports: [BrowserModule, RouterModule.forRoot(rootRouterConfig), UsersModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {

}
