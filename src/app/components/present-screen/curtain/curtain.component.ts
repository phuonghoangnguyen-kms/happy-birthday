import {
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'curtain',
    templateUrl: './curtain.component.html',
    styleUrls: ['./curtain.component.scss']
})
export class CurtainComponent implements OnInit {
    @Output() callback: EventEmitter<number> = new EventEmitter();

    active = false;

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            this.onClick();
        }, 3500);
    }

    onClick(): void {
        this.active = true;

        setTimeout(() => {
            this.callback.emit(2);
        }, 1500);
    }
}
