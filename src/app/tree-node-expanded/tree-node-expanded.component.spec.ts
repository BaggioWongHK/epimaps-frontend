import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeExpandedComponent } from './tree-node-expanded.component';

describe('TreeNodeExpandedComponent', () => {
  let component: TreeNodeExpandedComponent;
  let fixture: ComponentFixture<TreeNodeExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeExpandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
