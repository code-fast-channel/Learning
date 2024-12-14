import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-select.component.html',
  styleUrl: './single-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleSelectComponent {
  @Input() config: any = {
    data: [],
  };
  @Output() selectedValueChange = new EventEmitter<any>();  // Output event for selected value change

  trackByIndex(index: number, item: any): number {
    return index;
  }

  constructor() {}

  // Emit the selected value change to the parent component
  onSelectionChange(value: any) {
    this.selectedValueChange.emit(value);
  }
}
