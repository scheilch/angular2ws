import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Post }                from './post';
import { PostsComponent }      from './posts.component';
import { PostFormComponent }   from './post-form.component';
import { PostService }         from './post.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        PostFormComponent,
        PostsComponent
    ],
    exports: [
        PostFormComponent,
        PostsComponent
    ],
    providers: [
        PostService
    ]
})
export class PostsModule { 
}