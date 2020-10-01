# Udemy Complete Guide
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/7233704#notes

Update TS and packages:
https://stackoverflow.com/questions/39677437/how-to-update-typescript-to-latest-version-with-npm

# Content
- HTML & CSS styling  
  - View Encapsulation  
- Debugging (Browser)
- Components & Databinding  
  - Property & Eventbinding
  - Binding to custom properties
  - Alias assignment  
  - *ngFor / @Input to split up child-parent
  - 


## Best Practices
- Structure (Project / Folder)  
  - https://angular.io/guide/styleguide#lift

## Remarks
- HTML 
  - Event Attributes: https://www.w3schools.com/tags/ref_eventattributes.asp
  - Global Attributes: https://www.w3schools.com/tags/ref_standardattributes.asp

## Linting
- https://palantir.github.io/tslint/
- https://github.com/typescript-eslint/typescript-eslint
- Prettier:  
  - https://github.com/prettier/tslint-config-prettier




<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

# Angular Project - Udemy App
last video:
https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6655748#overview
## Content
- Components & Databinding
- Directives
- Services & Dependency Injection
- Routing
- Observables (async code)
- Forms
- Pipes
- Http
- Authentication
- Optimization & NgModules
- Deployment
- Animations & Testing

## Basics
- Angular workflow:  
  - https://angular.io/guide/bootstrapping 
  - Load `index.html`
  - Run `dynamically included script-imports`   
  - Script-imports will dynamically replace `<app-componentXY></app-componentXY>` with components  
- Bootstrap  
  - npm install bootstrap@3
- Angular flow   
  - `main.ts` -> `ap.module.ts` -> `app.component.ts` --> now `index.html` can load app-root
  - index.html contains some scripts automatically
  
 ## Components
 - components: html + ts + css
 - modules: bundle components to a package
 - Templates & Styles ..commit `6ab991ed`
 - Selector as...   (commit `2e319acd`)
   - attribute [] 
   - class .
   
 ## Databinding
 - Communication:  `Business Logic (ts) <-----> Templates (html)`
 
 - **Output Data** **`ts --> html`**  
   - String Interpolation *`{{ data }}`*  
     - USE: when just outputting something
     - can contain anything returning a string!!
     - like method returning a string or {{ 'string' '}}
   - Property Binding *`[property]="data"`*
     - USE: when changing property (html-element or directive or component)
     - most time can use property OR data binding
     
 
 - React to user **Events** **`ts <-- html`**  
   - Event Binding *`(event)="expression"`*
     - `(input)="..."` ...input is **DOM-Event** provided by **DOM-Element** 
     - `$event` ...gives access to event-data
 
 - Two-way-binding **`ts <--> html`**  
   - *`[(ngModel)]="data"`*
 
 
## Directives
- directives = instructions in the DOM
- components = directives with templates (instruction is: angular plz add template and js)
- use **Attribute style** to select directive !   
  `selector: '[appDirectiveName]'` ... `<div appDirectiveName` 
 
#### Directive Examples:
  - `*ngIf`  ...**Structural Directive**
  - `ngStyle` ...**Attribute Directive**, for dynamic upgrade style!
  - `ngClass`  -//-
  - `ngFor`

 
 
## Linting
https://palantir.github.io/tslint/
- Script in `package.json`
- Rules in `tslint.json`
- `ng lint --fix`  
- Fixable: https://palantir.github.io/tslint/rules/






<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
