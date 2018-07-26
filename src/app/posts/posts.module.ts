import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PostsRoutingModule } from "./posts-routing.module";
import { ArtistsComponent } from "./artists/artists.component";
import { PostsComponent } from "./posts.component";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [ArtistsComponent, PostsComponent, HomeComponent]
})
export class PostsModule {}
