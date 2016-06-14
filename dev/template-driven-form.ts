import {Component} from "@angular/core";

@Component({
    selector: 'my-template-form',
    template: `
        <div class="col-md-6 col-md-offset-3">
        <h2>Sign-up Form</h2>
          <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <div class="form-group form-group-sm">
              <label for="mail" class="col-sm-2 control-label">Mail</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="mail"
                    ngControl="email"
                    required
                    #email="ngForm">
                    <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
            </div> 
               <div class="form-group form-group-sm">
                    <label for="password" class="col-sm-2 control-label">Password</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="password"
                    ngControl="password"
                    required
                    #password="ngForm">
                    <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
               </div>
               <div class="form-group form-group-sm">
                    <label for="confirm-password" class="col-sm-2 control-label">Confirm</label>
                  <input 
                    type="text" 
                    class="form-control"
                    id="confirm-password" 
                    ngControl="confirm-password"
                    required
                    #passwordConfirm="ngForm">
                    <span class="validation-error" *ngIf="!passwordConfirm.valid">Not Valid</span>
                <div class="form-group">
                  <button 
                    type="submit" 
                    class="btn btn primary" 
                    [disabled]="!f.valid || password.value !== passwordConfirm.value">Submit</button> 
                </div>
            </div><!-- /.row -->
            </form>
            <h2>You submitted</h2>
            <div>Mail: {{user.mail}}</div>
            <div>Password: {{user.password}}</div>
        </div>
    `
})

export class TemplateDrivenFormComponent {
    user = {mail: '', password: ''};

    onSubmit(form){
        this.user.mail = form.value['email'];
        this.user.password = form.controls['password'].value;
    }
}