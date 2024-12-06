import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent implements OnInit {
  grid = Array.from({ length: 9 }, (_, i) => {
    return { id: i, isChecked: false, value: '' };
  });
  winnerName = '';
  symbols = {
    '0': 'X',
    '1': 'O',
  }
  currentSymbol = this.symbols['0'];
  ngOnInit() {
    // this.generateNewGrid();
  }

  change(ind: any) {
    if(this.currentSymbol === this.symbols['0']) {
      this.currentSymbol = this.symbols['1'];
    } else {
      this.currentSymbol = this.symbols['0'];
    }
   this.grid[ind].value = this.currentSymbol;
   const winner = [
    this.grid[0].value && this.grid[1].value && this.grid[2].value && this.grid[0].value === this.grid[1].value && this.grid[1].value === this.grid[2].value,
    this.grid[3].value && this.grid[4].value && this.grid[5].value && this.grid[3].value === this.grid[4].value && this.grid[4].value === this.grid[5].value,
    this.grid[6].value && this.grid[7].value && this.grid[8].value && this.grid[6].value === this.grid[7].value && this.grid[7].value === this.grid[8].value,
    this.grid[0].value && this.grid[4].value && this.grid[8].value && this.grid[0].value === this.grid[4].value && this.grid[4].value === this.grid[8].value,
    this.grid[2].value && this.grid[4].value && this.grid[6].value && this.grid[2].value === this.grid[4].value && this.grid[4].value === this.grid[6].value,
    
    this.grid[0].value && this.grid[3].value && this.grid[6].value && this.grid[0].value === this.grid[3].value && this.grid[3].value === this.grid[6].value,
    this.grid[1].value && this.grid[4].value && this.grid[7].value && this.grid[1].value === this.grid[4].value && this.grid[4].value === this.grid[7].value,
    this.grid[2].value && this.grid[5].value && this.grid[8].value && this.grid[2].value === this.grid[5].value && this.grid[5].value === this.grid[8].value,
    
  ];
  const mapper: any = {
     0: this.grid[0].value,
     1: this.grid[3].value,
     2: this.grid[6].value,
     3: this.grid[0].value,
     4: this.grid[2].value,
     5: this.grid[0].value,
     6: this.grid[1].value,
     7: this.grid[2].value,
  };
  if(winner.some(Val=>Val)) {
    const index: any = winner.findIndex(val=> val);
    this.winnerName = mapper[index];
     console.log('winner', winner)
  }
  }

  reset() {
    this.grid = Array.from({ length: 9 }, (_, i) => {
      return { id: i, isChecked: false, value: '' };
    });
    this.winnerName = '';
  }
}
