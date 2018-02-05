import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CommunicationService } from './communication/communication.service';

@Injectable()
export class TreeService {
  currentTree: CurrentTree;

  constructor() {
    this.currentTree = new CurrentTree();
  }

  getCurrentTree() { return this.currentTree; }
  resetTree() { this.currentTree = new CurrentTree(); }
}

class CurrentTree {
  levels: Array<TreeNode>; // levels are 0-based
  tree: any; // tree returned from HTTP request
  //  tree[L0Index][0]['root']['children'][L1Index]['children'][L2Index]['children']
  //  tree[L0Index][0]['root'] = {'children': Array; 'data': Array}
  canonicalURL: string;
  treeIndicies: Array<number>; // keeps record of indicies clicked at each tree level (length === levels.length - 1)
  //  arr = [1, 3] arr[1] represents index of L0 clicked, or L1 children, so L2 is currently displayed

  constructor() {
    this.levels = [];
    this.tree = null;
    this.canonicalURL = null;
    this.treeIndicies = [];
  }

  setTree(tree: any) { this.tree = tree; }
  getTree() { return this.tree; }
  setCanonicalURL(url: string) { this.canonicalURL = url; }
  getCanonicalURL() { return this.getCanonicalURL(); }
  addTreeIndex(index: number) { this.treeIndicies.push(index); }
  getTreeIndicies() { return this.treeIndicies; }

  /**
   * @description This should always be preceded by the
   * addTreeIndex method - first record the index the
   * user clicked on, and then get children to be displayed
   * at the deepest level.
   * @param {number} level
   * @return {any}
   */
  getChildrenAtLevel(level: number) {
    console.log(this.treeIndicies);
    if (this.treeIndicies && this.treeIndicies.length > 0) {
      let children = this.tree[this.treeIndicies[0]][0]['root']['children'];
      if (level >= 1) {
        for (let index = 1; index <= level; index++) {
          if (this.treeIndicies[index]) {
            children = children[this.treeIndicies[index]]['children'];
          }
        }
      }
      return children;
    }
  }

  getCurrentLevel() { return this.levels[this.levels.length - 1]; }
  addLevel(node: TreeNode) { this.levels.push(node); }

  /**
   * @description Removes levels strictly bigger than
   * level, excluding itself. Tree indicies also need
   * to be emptied.
   * @param {number} level
   */
  removeLevels(level: number) {
    const numLevels = this.levels.length;

    if (level < numLevels - 1) { // if there are three levels, you can't remove level 2, e.g.
      // start excludes itself,
      this.levels.splice(level + 1, numLevels - level - 1);
      this.treeIndicies.splice(level, this.treeIndicies.length - level);
    }
  }

  /**
   * @description Get data from the tree array
   * returned from HTTP, push them to one variable,
   * and push a TreeNode containing the array of data
   * into the levels array.
   * @param {Array<any>} children
   */
  extractData(children: Array<any>) {
    let allData = [];

    for (let index = 0; index < children.length; index++) {
      children[index].data.hasChildren = (children[index].children.length > 0) ? true : false;
      children[index].data.hasURL = (children[index].data.href) ? true : false;
      allData.push(children[index].data);
    }

    this.addLevel(new TreeNode(this.levels.length, allData));
  }

  /**
   * @description Same as extractData, except this
   * processes L0. L0's nesting to get to its node
   * data is slightly different.
   *
   * @return {number} Returns nothing if normal, -1
   * if data is abnormal.
   */
  extractDataL0() {
    let allData = [];

    try {
      for (let index = 0; index < this.tree.length; index++) {
        this.tree[index][0]['root']['data']['hasChildren'] = (this.tree[index][0]['root']['children'].length > 0) ? true : false;
        this.tree[index][0]['root']['data']['hasURL'] = (this.tree[index][0]['root']['data']['href']) ? true : false;
        allData.push(this.tree[index][0]['root']['data']);
      }
    } catch (err) {
      console.error(err);
      return -1;
    }

    this.addLevel(new TreeNode(0, allData));
  }
}

class TreeNode {
  level: number;
  data: Array<string>;

  constructor(level, data) {
    this.level = level;
    this.data = data;
  }

  setLevel(level: number) { this.level = level; }
  getLevel() { return this.level; }
  setData(data: Array<string>) { this.data = data; }
  getData() { return this.data; }
}
