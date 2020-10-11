import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 27),
        new Ingredient('Tomatoes', 18),
    ];

    public ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    public getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
        console.log(this.ingredients);
    }

}
