import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Config } from './../../../models/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public config: Config;
    step = 1;
    jsonURL = 'assets/config.json';

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private http: HttpClient) {
        this.getJSON().subscribe(res => this.config = res);
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(res => {
            this.step = res.step ? Number(res.step) : 1;
        });
    }

    next(): void {
        this.step += 1;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { step: this.step } });
    }

    getJSON(): Observable<Config> {
        return this.http.get(this.jsonURL).pipe(map((res: Config) => res));
    }
}
