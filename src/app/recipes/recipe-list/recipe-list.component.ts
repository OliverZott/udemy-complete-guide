import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('First recipe', 'nice meal',
            'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vfvx2mulxwqxyrl4fkfk'),
        new Recipe('Second Recipe', 'also good?',
            'https://www.stylist.co.uk/images/app/uploads/2020/05/12113411/healthy-meal-ideas-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress')
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
