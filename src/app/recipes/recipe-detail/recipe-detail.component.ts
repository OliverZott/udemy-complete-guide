import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    @Input() detailedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
    }

    onAddToShoppingList(): void {
        this.recipeService.addIngredientToShoppingList(this.detailedRecipe.ingredients);
    }
}
