import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { Config } from 'src/models/config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @Input() config: Config;
    @Output() next: EventEmitter<any> = new EventEmitter();

    day: number;
    month: number;
    year: number;
    isFocus = false;
    openBox = false;

    constructor() { }

    ngOnInit(): void { }

    verify(): boolean {
        return this.day === this.config.BirthDay.Day && this.month === this.config.BirthDay.Month && this.year === this.config.BirthDay.Year;
    }

    open(): void {
        this.next.emit();
    }
}
