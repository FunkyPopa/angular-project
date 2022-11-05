import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsResolver} from "./services/resolvers/comments.resolver";

const routes: Routes = [
  {path: '', component: CommentsComponent, resolve:{comments: CommentsResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }