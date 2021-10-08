import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { Config } from 'src/models/config';
import { EnvelopeComponent } from '../envelope/envelope.component';

@Component({
    selector: 'theme-card',
    templateUrl: './theme-card.component.html',
    styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent implements OnInit {
    @Input() config: Config;
    @Output() callback: EventEmitter<any> = new EventEmitter();
    @ViewChild('envelope') envelope: EnvelopeComponent;

    works: Works[] = [];
    constructor() { }

    ngOnInit(): void {
        let index = 0;
        this.config.HappyBirthDayText.split(' ').forEach(w => {
            const work = new Works();
            w.split('').forEach(c => {
                work.Chars.push(new Chars(c, index));
                index++;
            });
            this.works.push(work);
        });
    }
}

export class Works {
    public Chars: Chars[];
    constructor() {
        this.Chars = [];
    }
}

export class Chars {
    public Char: string;
    public Index: number;
    constructor(char: string, index: number) {
        this.Char = char;
        this.Index = index;
    }
}