import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bingo.component.html',
  styleUrl: './bingo.component.scss'
})
export class BingoComponent implements OnInit {
  bingoGrid: any = [];
  textBingo = ['B', 'I', 'N', 'G', 'O'];
  completedCount = 0;
  completedCountList: any = [];


  ngOnInit() {
    this.generateNewGrid();
  }

  generateNewGrid() {
    this.completedCount = 0;
    this.bingoGrid = [];
    this.completedCountList = [];
    let ids = Array.from({ length: 25 }, (_, i) => i + 1); // create an array of numbers from 1 to 25
    for (let i = 0; i < 25; i++) {
      let randomIndex = Math.floor(Math.random() * ids.length);
      let id = ids.splice(randomIndex, 1)[0];
      this.bingoGrid.push({ id: id, marked: false });
    }
  }

  checkUnCheck(ind: any) {
    console.log('sss', ind);
    this.bingoGrid[ind].isChecked = true;
    const conditionsList = [
      this.bingoGrid[0].isChecked && this.bingoGrid[1].isChecked && this.bingoGrid[2].isChecked && this.bingoGrid[3].isChecked && this.bingoGrid[4].isChecked,
      this.bingoGrid[5].isChecked && this.bingoGrid[6].isChecked && this.bingoGrid[7].isChecked && this.bingoGrid[8].isChecked && this.bingoGrid[9].isChecked,
      this.bingoGrid[10].isChecked && this.bingoGrid[11].isChecked && this.bingoGrid[12].isChecked && this.bingoGrid[13].isChecked && this.bingoGrid[14].isChecked,
      this.bingoGrid[15].isChecked && this.bingoGrid[16].isChecked && this.bingoGrid[17].isChecked && this.bingoGrid[18].isChecked && this.bingoGrid[19].isChecked,
      this.bingoGrid[20].isChecked && this.bingoGrid[21].isChecked && this.bingoGrid[22].isChecked && this.bingoGrid[23].isChecked && this.bingoGrid[24].isChecked,
      this.bingoGrid[0].isChecked && this.bingoGrid[6].isChecked && this.bingoGrid[12].isChecked && this.bingoGrid[18].isChecked && this.bingoGrid[24].isChecked,
      this.bingoGrid[4].isChecked && this.bingoGrid[8].isChecked && this.bingoGrid[12].isChecked && this.bingoGrid[16].isChecked && this.bingoGrid[20].isChecked,
      this.bingoGrid[0].isChecked && this.bingoGrid[5].isChecked && this.bingoGrid[10].isChecked && this.bingoGrid[15].isChecked && this.bingoGrid[20].isChecked,
      this.bingoGrid[1].isChecked && this.bingoGrid[6].isChecked && this.bingoGrid[11].isChecked && this.bingoGrid[16].isChecked && this.bingoGrid[21].isChecked,
      this.bingoGrid[2].isChecked && this.bingoGrid[7].isChecked && this.bingoGrid[12].isChecked && this.bingoGrid[17].isChecked && this.bingoGrid[22].isChecked,
      this.bingoGrid[3].isChecked && this.bingoGrid[8].isChecked && this.bingoGrid[13].isChecked && this.bingoGrid[18].isChecked && this.bingoGrid[23].isChecked,
      this.bingoGrid[4].isChecked && this.bingoGrid[9].isChecked && this.bingoGrid[14].isChecked && this.bingoGrid[19].isChecked && this.bingoGrid[24].isChecked
    ];
    this.completedCountList = conditionsList.filter(val => val).map((val, i) => (i));
    this.completedCount = conditionsList.filter(val=>val).length;
    console.log('sss', conditionsList,conditionsList.length,conditionsList.filter(val=>val),conditionsList.filter(val=>val).length)
  }
}
