import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'image-heart',
    templateUrl: './image-heart.component.html',
    styleUrls: ['./image-heart.component.scss']
})
export class ImageHeartComponent implements OnInit {

    images: string[]= [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg'
    ];

    constructor() { }

    ngOnInit(): void { }
}
