import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

    /**
     * To avoid emitting-chain: item-list-component-detail  ...single Emitter
     * Also possible to encapsulate event (2 methods: emit event / get-access)
     */
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('First recipe', 'nice meal',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vfvx2mulxwqxyrl4fkfk'),
        new Recipe('Second Recipe', 'also good?',
            'https://www.stylist.co.uk/images/app/uploads/2020/05/12113411/healthy-meal-ideas-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress')
    ];


    /**
     * Getter with slice() to retirve copy of recipes!
     * JS specific (always get reference to ref-types)
     *
     */
    public getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

}