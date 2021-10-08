import {
    Component,
    Input,
    OnInit,
    ViewChild
} from '@angular/core';
import { Config } from 'src/models/config';
import { MatDialog } from '@angular/material/dialog';
import { MessagePopupComponent } from '../message-popup/message-popup.component';
import { ThemeCardComponent } from '../theme-card/theme-card.component';

@Component({
    selector: 'cake',
    templateUrl: './cake.component.html',
    styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

    @Input() config: Config;
    @ViewChild('themeCard', { static: false }) themeCard: ThemeCardComponent;

    show = false;

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
        setTimeout(() => {
            this.show = true;
        }, 6500);
    }

    openMessage(): void {
        const dialogRef = this.dialog.open(MessagePopupComponent, {
            height: '80%',
            width: '80%',
            disableClose: true,
            data: this.config
        });

        dialogRef.afterClosed().subscribe(() => this.themeCard.envelope.toggle());
    }
}
