import {
    AfterViewInit,
    Component,
    Inject,
    OnInit
} from '@angular/core';
import { Config } from 'src/models/config';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import './../../../../assets/js/smtp.js';
declare let Email: any;

@Component({
    selector: 'message-popup',
    templateUrl: './message-popup.component.html',
    styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit, AfterViewInit {

    constructor(
        public dialogRef: MatDialogRef<MessagePopupComponent>,
        @Inject(MAT_DIALOG_DATA) public config: Config) {
    }

    messages: string[] = []
    whishLists: { item: string }[] = [];
    index = -1;
    lastMessage: string;

    ngOnInit(): void {
        this.messages = this.config.Messages;
        for (let i = 0; i < this.config.WishlistNumber; i++) {
            this.whishLists.push({ item: '' });
        }
    }

    ngAfterViewInit(): void {
        for (let i = 0; i < this.messages.length; i++) {
            const e = document.getElementById(`image-${i}`);
            e.style.backgroundImage = `url("assets/images/messages/${i + 1}.jpg")`;
        }
    }

    previous(): void {
        if (this.index - 1 < -1) {
            return;
        }
        this.index--;
    }

    next(): void {
        if (this.index + 1 > this.messages.length + 2) {
            return;
        }

        if (this.index == this.messages.length + 1) {
            if (this.verifyAnyWishlist()) {
                this.sendWishlist();
            } else {
                alert(this.config.WishlistMessage);
            }
        }

        this.index++;

        if (this.index == this.messages.length + 2) {
            setTimeout(() => {
                this.hearts();
            })
        }
    }

    sendWishlist(): void {
        let wishlist = '';
        for (let i = 0; i < this.config.WishlistNumber; i++) {
            wishlist += `${i + 1}/${this.whishLists[i].item}`;
        }

        this.sendEmail(wishlist);
    }

    sendEmail(body: string): void {
        Email.send({
            SecureToken: this.config.Email.SecureToken,
            To: this.config.Email.To,
            From: this.config.Email.From,
            Subject: this.config.Email.Subject,
            Body: body
        }).then();
    }

    verifyAnyWishlist(): boolean {
        return this.whishLists.some(x => x.item && x.item !== '');
    }

    hearts(): void {
        const element: HTMLElement = document.querySelector('.end .end-container');
        const heartcount = (element.offsetWidth / 50) * 5;
        for (var i = 0; i <= heartcount; i++) {
            var size = (this.random(60, 120) / 10);
            const span = document.createElement('span');
            span.className = 'particle';
            span.style.top = this.random(20, 80) + '%';
            span.style.left = this.random(0, 95) + '%';
            span.style.width = size + 'px';
            span.style.height = size + 'px';
            span.style.animationDelay = (this.random(0, 30) / 10) + 's';
            element.append(span);
        }
    }

    random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    sendMessage(): void {
        if (this.lastMessage && this.lastMessage !== '') {
            this.sendEmail(this.lastMessage);
            alert('Sent');
        }
    }
}
