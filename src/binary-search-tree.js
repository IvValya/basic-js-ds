const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode=null;
}

  root() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let node=this.rootNode;
    if (!node)
    {
      return null;
    }
    return node;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    this.rootNode=addRoot(this.rootNode, data);

    function addRoot(node, data)
    {
      if (!node) 
      { 
        return new Node(data);
      }

      if (node.data === data)
      {
        return node;
      }

      if (data<node.data) 
      {
        node.left=addRoot(node.left, data);
      }
      else
      {
        node.right=addRoot(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasRoot(this.rootNode, data);

    function hasRoot(node, data) 
    {
      if (!node) 
      {
        return false;
      }

      if (node.data===data)
      {
        return true;
      
      }
      if (data<node.data)
      {
        return hasRoot(node.left, data);
      }
      else 
      {
        return hasRoot(node.right, data);
      }
    }
  }

  find(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findRoot(this.rootNode, data);

    function findRoot(node, data) 
    {
      if (!node) 
      {
        return null;
      }

      if (node.data===data)
      {
        return node;
      
      }
      if (data<node.data)
      {
        return findRoot(node.left, data);
      }
      else 
      {
        return findRoot(node.right, data);
      }
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode=removeRoot(this.rootNode, data);

    function removeRoot(node, data) 
    {
      if (!node) 
      {
        return null;
      }

      if (node.data===data)
      {
        if ((!node.left)&&(!node.right))
        {
          return null;
        }

        if (!node.left)
        {
          node=node.right;
          return node;
        }

        if (!node.right)
        {
          node=node.left;
          return node;
        }
    
        let current=node.left;
        while (current.right)
        {
          current=current.right;
        }
        node.data=current.data;
        node.right=removeRoot(node.right, current.data);
        return node;
      }

      if (data<node.data)
      {
        return removeRoot(node.left,data);
      }
      if (data>node.data)
      {
        return removeRoot(node.right,data);
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
        let node=this.rootNode;
        if (!node)
        {
          return null;
        }
        
        while (node.left)
        {
          node=node.left;
        }
          return node.data;
       
        
      }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    let node=this.rootNode;
    if (!node)
    {
      return null;
    }
    
    while (node.right)
    {
      node=node.right;
    }
      return node.data;
  }
}
/*const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(11);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(15);
      tree.add(9);
      tree.add(13);
      
      
      tree.remove(11);
  */
module.exports = {
  BinarySearchTree
};