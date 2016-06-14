import {Component} from '@angular/core';
import {TemplateDrivenFormComponent} from "./template-driven-form";

@Component({
    selector: 'my-app',
    template: `
        <my-template-form></my-template-form>
       
    `,
    directives: [TemplateDrivenFormComponent]
})
export class AppComponent {

}