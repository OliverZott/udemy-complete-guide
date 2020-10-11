import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];

    /**
     * ShoppingListService is provided in app.module,
     * because the instance is later also used in the recipe component
     */
    constructor(private slService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.slService.getIngredients();
        this.slService.ingredientAdded.subscribe((ingredient: Ingredient) => {
            this.slService.addIngredient(ingredient);
        });
    }

}
