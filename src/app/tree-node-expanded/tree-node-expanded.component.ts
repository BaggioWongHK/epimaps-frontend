import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication/communication.service';

@Component({
  selector: 'app-tree-node-expanded',
  templateUrl: './tree-node-expanded.component.html',
  styleUrls: ['./tree-node-expanded.component.css'],
})
export class TreeNodeExpandedComponent implements OnInit {
  expandedText = 'Click on a tree node to show its expanded form.';
  defaultExpandedText = 'Click on a tree node with longer text content to show its expanded form.';
  constructor(private communicator: CommunicationService) { }

  ngOnInit() {
    this.communicator.currentEvent.subscribe(event => this.expandedText = event.value || this.defaultExpandedText);
  }
}
