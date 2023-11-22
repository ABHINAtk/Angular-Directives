import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  DisplayTable:boolean = true

  visible:boolean=false


  onclick(){
    this.DisplayTable=!this.DisplayTable;
    this.visible=!this.visible;
  }


  columnStyles: { [key: number]: { [key: string]: string } } = {};

  changeColumnStyle() {
   
    for (let i = 0; i < 4; i++) {
      this.columnStyles[i] = { 'background-color': this.getRandomColor() };
    }
  }

  getColumnStyle(columnIndex: number) {
    return this.columnStyles[columnIndex];
  }

  getRandomColor() {
    
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}


  






