import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CustomValidators } from '../validators/customValidators';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent implements OnInit {
    userForm: FormGroup;
    title: string;
    user = new User();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UserService
    ) {
        this.userForm = fb.group({
            //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, CustomValidators.email])],
            phone: [],
            avatar: ['', Validators.required],
            address: fb.group({
                street: ['', Validators.required],
                streetnumber: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
                city: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZüÜöÖäÄ ]*")])],
                zipcode: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{5}")])]
            })
        });
    }

    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = params["id"];
            console.log(id);

            this.title = (id == undefined) ? "Nutzer anlegen" : "Nutzer bearbeiten";

            if (id == undefined)
                return;

            this._userService.getUser(id)
                .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }

    save() {
        var result;

        if (this.user.id === undefined) {
            result = this._userService.addUser(this.user)
        }
        else {
            result = this._userService.updateUser(this.user);
        }

        result.subscribe(x => {
            // this.userForm.markAsPristine();
            this._router.navigate(['users']);
        });
    }
}