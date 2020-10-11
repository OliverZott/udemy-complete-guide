import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    // should manage shipping list / list ofingredients

    private ingredients: Ingredient[] = [];

    public ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    public getIngredients(): Ingredient[] {
        return this.ingredients;
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
    }

}
