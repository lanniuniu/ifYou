import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    hero: Hero = {
        id: 123,
        name: 'lanniuniu'
    };
    heroes = HEROES;

    selectedHero: Hero;

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }


}
