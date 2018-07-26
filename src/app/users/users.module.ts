import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersComponent } from "./users.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{ path: "", component: UsersComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [UsersComponent]
})
export class UsersModule {}
