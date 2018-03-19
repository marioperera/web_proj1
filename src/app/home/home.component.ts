 import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *',[
        query(':enter',style({opacity:0}),{optional:true}),

          query(':enter',stagger('700ms',[
            animate('.8s ease-in',keyframes([
              style({opacity:0,transform:'translateY(-75%)',offset:0}),
              style({opacity:.5,transform:'translateY(35px)',offset:.3}),
              style({opacity:1,transform:'translateY(0)',offset:1})

            ]))]),{optional:true}),
/*
          query(':Leave',stagger('900ms',[
            animate('.9s ease-in',keyframes([
              style({opacity:1,transform:'translateY(0)',offset:1}),
              style({opacity:.5,transform:'translateY(35px)',offset:.3}),
              style({opacity:0,transform:'translateY(80%)',offset:0})

            ]))]),{optional:true})
*/
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemcount:number =4;
  btntxt :String ='Add an item';
  goaltxt:String ='My First Life Goal';
  goals:String[] =['My first goal','I wont to climb a mounntain','Go ice skiing'];

  constructor() { }

  ngOnInit() {
    this.itemcount =this.goals.length;
  }
  addItem(){
    this.goals.push(this.goaltxt);
    this.goaltxt ='';
    this.itemcount =this.goals.length;

  }
  removeItem(i){
    this.goals.slice(i,1);
  }

}
