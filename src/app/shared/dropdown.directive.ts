import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    /**
     * Bind "open"-css-class to "class"-attribute of element with
     */
    @HostBinding('class.open') isOpen: boolean = false;


    /**
     * Directive "appDropdown" sits on html-element and on click adds css-class "open" (bootstrap)
     */
    @HostListener('click') toggleOpen(): void {
        this.isOpen = !this.isOpen;

    }

}
