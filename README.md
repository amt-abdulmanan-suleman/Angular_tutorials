# AngularTutorials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Two features of Angular Core:
- Ability to define custom html element
- Ability to develop to build our program in a way our data and the view are completely independent.

Input properties
Browser Events: are wrapped with "()" eg. (click)="onClicked()", (keyup)
Automatic Synchronization btn the data and the view.

component Inputs: @Input(), wrapping props with "[]" makes it dynamic

Outputs: @Output(), custom events don't bubble up but native events like (click) do.

Core Directives: 

@for: 
	@for (course of courses; track course.id; let index = $index) {
		component with its props -> course
	}
	@empty {
		data not available -> component
	}

	@empty: displays some components incase the data -> courses is empty.

	Options of @for -> {
		$index: the index of the current value in the iterable.
		$count: number of elements in the iterable.
		$first: identify the first element of the array.
		$last: identify the last element of the array.
		$even: identify elements with even indexes
		$odd: identify elements with odd indexes
	}

	@for tracking functions: it help angular to optimize a way in which the DOM get renders. Track function can be 	implement in a case where iterables don't have unique props -> id.


*ngFor:
	<h1 *ngFor="let course of courses; index as i; first as isFirst" [class.is-first]="isFirst" [course]="course" 	[cardIndex]="i+1"><h1/>
	
	Options of *ngFor -> {index, first, last, even, odd}


@if:
	@if(condition) {
		do this;
	}

	@else if(condition) {
		do this;	
	}

	@else {
		do this;
	}

*ngIf: 	
	<h1 *ngIf="condition; else noText"></h1>
	<ng-template #noImage>
		<p>No text found</p>
	</ng-template>
	if condition evaluates to false, the component is ignored and the template referenced in the else's is rendered and 	vice versa.

[ngClass]: 
	style: 
		.beginner: {
			color: red
		}
		.heading: { background-color: blue}

	<h1 class="heading" [ngClass]="'beginner'">Adam and Eve</h1> -> passing strings to ngClass
	<h1 class="" [ngClass]="['beginner','heading']">Adam and Eve</h1> -> passing array of strings to ngClass
	<h1 class="" [ngClass]="{'beginner': true,'heading': true}">Adam and Eve</h1> -> passing objects to ngClass
	<h1 class="" [ngClass]="cardClasses()">Adam and Eve</h1> -> can take functions which return the classes to be applied 	to the element. *Acceptable way*
	cardClasses(){
		return {'beginner': true}
	}

[ngStyle]:
	<h1 class="heading" [ngStyle]="{'text-decoration':'underline'}">Adam and Eve</h1>
	<h1 class="heading" [ngStyle]="cardStyles()">Adam and Eve</h1>
	cardStyles(){
		return {'text-decoration':'underline'}
	}

@switch:
	@switch(values){
		@case(value) {
			do this;
		}
		@case(value) {
			do this;
		}
		@default {
			do this;
		}
	}

[ngSwitch]:
	<div [ngSwitch]="values">
		<div *ngSwitchCase="'value1'">value 1</div>
		<div *ngSwitchCase="'value2'">value 2</div>
		<div *ngSwitchCase="'value3'">value 3</div>
		<div *ngSwitchDefault>default value</div>
	</div>
	

Built-In Pipes - Complete Catalog:
	startDate = new Date(2000,0,1)
	pipe -> is a template mechanism that can be used to transform data and display it into other forms to the user. pipes 	can take several args.
	date -> {{startDate | date}} -> this will display "Jan 1, 2000" -> default format.
		     {{startDate | date: 'MM/dd/yyyy}} -> 01/01/2000
	String: 
		- uppercase
		- lowercase
		- titlecase
	number: '3.3-5' -> 3 integer digits and 3-5 decimal places.
	currency
	percent

	collection of data: 
		-slice:0:2 -> start - 0, end - 2 not inclusive.
	json
	keyvalue

Injectable Services:
	ngOnInit() -> is a life cycle hook, take some initialization logic such as triggering a fetch call.
	subscribe to observables to trigger it.
	"courses$" -> observable variable.
	
	Async Pipe:
		<custom-element *ngFor="let course of (courses$ | async)" [course]="course"/>
		

@defer: partial template loading.
@placeholder: template displayed before templates in @defer are rendered.
@error: renders the elements in it's block when error is encounted while fetching for a bundle.

	@defer {
		<h1>defer for a while</h1>
	}
	@placeholder(minimum 3s) {
		<h1>display for three seconds then the elements in the defer block takes over</h1>
	}
	@loading(minimum 3s; after 1s) {
		<h1>
			If the loading takes less than 1s, the loading tag shouldn't be shown but incase it takes more 				     	than a second the loading element should display for 3s.
		</h1>
	}
	@error {
		<h2>Error occured</h2>
	}

@defer triggers:
	idle triggers are default triggers -> (on idle; prefetch on idle) is the default behavior of @defer,
	immediate trigger -> (on immediate; prefetch on immediate)-> whenever the parent component is rendered for the first 				     time then it's triggered.
	(on timer(15s); prefetch on timer(10s))	-> the bundle should only be loaded 10s after component is initialized, then 	                                		   15s after initialization the deferred block is displayed. 
	(on viewport; prefetch on idle) -> will be displayed only when the component in the defer block reaches the 							   viewport 

@defer built-in triggers:
	-on interaction:
		(on interaction; prefetch on interaction)
	-on hover:

@defer custom triggers: custom triggers use *when.

@ViewChild(): can't see elements inside projected content ie. <ng-content></ng-content>
ngAfterViewInit(){}
@ViewChildren()
```<ng-content select="img"></ng-content>```:
			 we can select contents to be projected using element/class selectors. It supports multi-slot			 		projection.	

@ContentChild(): use to query projected contents.
@ContentChild(component, {read: ElementRef}) -> querying the component but want the element *nativeDOMElement reference 						instead of the content.

@ContentChildren(componentsRef): returns queryList of the components.
```<ng-template></ng-template>```
Angular Templates as components inputs.


ANGULAR CUSTOM DIRECTIVES:
	@HostBinding('className') -> className selectors.
	@HostBinding('attr.disabled') -> attribute selectors.

*DOM properties is different from DOM attributes.

Angular Host Listener:
	@HostListener('mouseover')
	mouseOver() {
		this.isHighlighted = true;
	}

Directive Export as syntax
custom structural directives:
	*ngxUnless: 
	

"https://igubal-coupling-joints-configurator.igus.tools/
Trunk based development
Orama"
	