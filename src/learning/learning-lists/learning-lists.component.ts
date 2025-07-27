import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { SingleSelectComponent } from '../../shared/components/single-select/single-select.component';
import { CommonCardListComponent } from '../../shared/components/common-card-list/common-card-list.component';
import { learningList } from '../learning.constant';
import { Router, RouterModule } from '@angular/router';
import { dropdownConfig } from '../../general/general-lists/general.constant';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-learning-lists',
  standalone: true,
  imports: [CommonCardListComponent, SingleSelectComponent, RouterModule],
  templateUrl: './learning-lists.component.html',
  styleUrl: './learning-lists.component.scss'
})
export class LearningListsComponent {
  list = structuredClone(learningList);
  config = structuredClone(dropdownConfig);

  private modalService = inject(NgbModal);
	closeResult: WritableSignal<string> = signal('');

  constructor(private router: Router) {
 
  }
  navigate(item: any) {
   this.router.navigate(['learning/detail', item.selectedIndex])
  }

  add(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result: any) => {
        console.log('sss',`${result}`)
				this.closeResult.set(`Closed with: ${result}`);
        if(result == 'Save click') {
           
        }
			}
		);
	}

  save() {
   
  }

}
