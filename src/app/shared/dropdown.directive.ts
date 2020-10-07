import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

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
    @HostListener('blub') toggleOpenSimple(): void {       // change 'blub' to 'click' to work!
        this.isOpen = !this.isOpen;

    }

    @HostListener('document:click', ['$event']) toggleOpenSoph(event: Event): void {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {
    }
}
