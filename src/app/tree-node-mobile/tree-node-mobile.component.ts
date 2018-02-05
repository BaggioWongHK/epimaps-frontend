import { Component, OnInit, Input } from '@angular/core';
import { slideIn, slideOut } from '../animations/slide';
import { fadeIn, fade } from '../animations/fade.in';
import { CommunicationService } from '../communication/communication.service';

@Component({
  selector: 'app-tree-node-mobile',
  templateUrl: './tree-node-mobile.component.html',
  styleUrls: ['./tree-node-mobile.component.css'],
  animations: [ slideIn, slideOut, fadeIn, fade ]
})
export class TreeNodeMobileComponent implements OnInit {
  showTree = false;
  @Input() fullText;
  constructor(private communication: CommunicationService) { }

  ngOnInit() {
  }

  toggleTree() {
    if (this.showTree) {
      this.showTree = false;
    } else {
      this.showTree = true;
    }
  }

  goToTree(event) {
    event.stopPropagation();
  }

  expandText(fullText: string) {
    this.communication.emitEvent({
      'event': 'expandText',
      'value': fullText
    });
  }
}
