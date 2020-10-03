import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {
    }

    ngOnInit(): void {
    }

    onAddItem(): void {
        const addedIngredient = new Ingredient(
            this.nameInputRef.nativeElement.value,
            this.amountInputRef.nativeElement.value);
        this.ingredientAdded.emit(addedIngredient);
    }
}
