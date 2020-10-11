import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 27),
        new Ingredient('Tomatoes', 18),
    ];

    public ingredientsChanged = new EventEmitter<Ingredient[]>();

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    /**
     * Method adds ingredients to array and emits the changed array
     * to update subscribers with new array-copy
     */
    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
        // console.log(this.ingredients);
    }

}
