import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modalmodule/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modalsection',
  templateUrl: './modalsection.component.html',
  styleUrls: ['./modalsection.component.css']
})
export class ModalsectionComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  open(){
    const modalRef = this.modalService.open(ModalComponent,{backdrop:false});
    modalRef.componentInstance.title = 'Modal title';
    modalRef.componentInstance.content = 'Modal content';
  }
  ngOnInit(): void {
  }

}
