import {Component,OnInit} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})


export class HeaderComponent implements OnInit{
    selected:boolean = false;
    constructor(){}

    ngOnInit(){

    }
    onClickOfList():void{
        if(this.selected==false){
            this.selected=true;
        }
        else{
            this.selected=false;
        }
    }
}