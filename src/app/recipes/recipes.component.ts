import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service'

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

    selectedRecipe: Recipe;

    /** 
     * IMPORTANT: RecipeService is provided exactly on this component  -->
     *  --> All other components inside ("below") this one 
     * have the same instance of RecipeService !!!
     * 
     */
    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) => {
                this.selectedRecipe = recipe;
            }
        );
    }

}
