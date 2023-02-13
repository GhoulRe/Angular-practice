import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BComponent } from '../b/b.component';
import { CComponent } from '../c/c.component';
import { DComponent } from '../d/d.component';
import { DisplaychildComponent } from '../displaychild/displaychild.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  @ViewChild('container',{read:ViewContainerRef,static:true})
  container!:ViewContainerRef;

  create(N){
     this.container.clear();
     if(N === 'A'){
      this.container.createComponent(DisplaychildComponent)
     }else if(N === 'B'){
      this.container.createComponent(BComponent)
     }else if(N === 'C'){
      this.container.createComponent(CComponent)
     }else if(N === 'D'){
      this.container.createComponent(DComponent)
     }
  }
}
