import mojs from '@mojs/core';
import {
    AfterViewInit,
    Component,
    Input,
    OnInit
} from '@angular/core';
import { Config } from 'src/models/config';

@Component({
    selector: 'present-screen',
    templateUrl: './present-screen.component.html',
    styleUrls: ['./present-screen.component.scss']
})
export class PresentScreenComponent implements OnInit, AfterViewInit {

    @Input() config: Config;

    active = false;
    screen = 1;

    audioPlayed = false;

    constructor() { }

    ngOnInit(): void {
    }

    async ngAfterViewInit(): Promise<void> {
        await this.playAudio();
    }

    changeScreen(screen: number): void {
        this.screen = screen;

        if (screen === 2) {

            let i = 0;
            setTimeout(() => {
                document.addEventListener('click', event => {
                    if (i <= 10) {
                        i++;
                        this.bursty(event.pageX, event.pageY);
                    }
                });

                let a = setInterval(() => {
                    if (i <= 10) {
                        i++;
                        this.randomizedConfetti();
                    }
                }, 1000);

                let b = setTimeout(() => {
                    setInterval(() => {
                        this.removeElement();
                        i--;
                    }, 1000);
                }, 3000);

                setTimeout(() => {
                    clearInterval(a);
                }, 300000);
            }, 7000);
        }
    }

    bursty(x, y) {
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { 'white': '#25D2FF' },
                duration: 2000
            }
        }).tune({
            x: x,
            y: y,
        });

        burst.replay();
    }

    randomizedConfetti() {
        let randomX = Math.floor(Math.random() * (document.body.clientWidth - 200) + 0);
        let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { 'white': '#25D2FF' },
                duration: 5000
            }
        }).tune({
            x: randomX,
            y: randomY,
        });

        burst.replay();
    }

    removeElement(): void {
        const element = document.querySelector('[data-name="mojs-shape"');
        if (element) {
            element.remove();
        }
    }


    async playAudio(): Promise<void> {
        let audio = new Audio();
        audio.src = this.config.Music;
        audio.loop = true;
        audio.autoplay = true;
        audio.load();
        audio.play();
    }
}