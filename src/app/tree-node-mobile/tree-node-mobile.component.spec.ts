import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeMobileComponent } from './tree-node-mobile.component';

describe('TreeNodeMobileComponent', () => {
  let component: TreeNodeMobileComponent;
  let fixture: ComponentFixture<TreeNodeMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
