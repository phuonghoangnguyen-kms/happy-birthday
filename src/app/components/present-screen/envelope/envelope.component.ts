import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'envelope',
    templateUrl: './envelope.component.html',
    styleUrls: ['./envelope.component.scss']
})
export class EnvelopeComponent implements OnInit, AfterViewInit {

    @Output() callback: EventEmitter<any> = new EventEmitter();

    flip: HTMLElement;
    letter: HTMLElement;
    opened = false;

    constructor() { }

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        this.flip = document.getElementById('flip');
        this.letter = document.getElementById('letter');
    }

    public toggle(): void {
        if (this.opened) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        this.flip.classList.add('open');
        this.flip.classList.remove('close');
        this.opened = true;

        setTimeout(() => {
            this.letter.classList.add('letterOpen');
            this.letter.classList.remove('letterClose');
            this.letter.style.zIndex = '7';

            setTimeout(() => {
                this.callback.emit();
            }, 1000);
        }, 400);
    }

    close(): void {
        this.opened = false;
        this.letter.classList.remove('letterOpen');
        this.letter.classList.add('letterClose');
        setTimeout(function () {
            this.flip.classList.remove('open');
            this.flip.classList.add('close');
            this.letter.style.zIndex = '5';
        }, 300);
    }
}

