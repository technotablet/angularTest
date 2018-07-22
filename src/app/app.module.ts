import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from "./posts/posts.component";
import { HomeComponent } from "./home/home.component";

import { PLATFORM_ID, APP_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "static-site" }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? "in the browser"
      : "on the server";
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
