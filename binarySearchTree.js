class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  //lookup
  lookup(value){
    if(this.root == null){
      return null;
    }
    let currNode = this.root;
    while(true){
      if(currNode.value == value){
        return currNode;
      }else if(currNode.value > value){
        if(currNode.left != null){
          currNode = currNode.left;
        }else{
          return null;
        }
      }else if(currNode.value < value){
        if(currNode.right != null){
          currNode = currNode.right;
        }else{
          return null;
        }
      }
    }
  }

  //insert
  insert(value){
    const newNode = new Node(value);
    if(this.root == null){
      this.root = newNode;
    }else{
      let currNode = this.root;
      while(true){
        if(currNode.value < value){
          if(currNode.right == null){
            currNode.right = newNode;
            return newNode;
          }else{
            currNode = currNode.right;
          }
        }else if(currNode.value > value){
          if(currNode.left == null){
            currNode.left = newNode;
            return newNode;
          }else{
            currNode = currNode.left;
          }
        }else{
          return null;
        }
      }
    }
  }

  //remove
  remove(value){
    //traverse to the node if exists
    //if leaf node - remove the node
    if(this.root.left == null && this.root.right == null){
      this.root = null;
    }else{
      let currNode = this.root;
      let parentNode = null;
      while(currNode){
        console.log(currNode);
        if(currNode.value > value){
          parentNode = currNode;
          currNode = currNode.left;
        }else if(currNode.value < value){
          parentNode = currNode;
          currNode = currNode.right;
        }else{
          //Scenario 1 - only 2 nodes
          if(currNode.left != null && currNode.right == null && parentNode == null){
            console.log('sc1');
            this.root = currNode.left;
            break;
          }

          //Scenario 2 - only 2 nodes
          if(currNode.left == null && currNode.right != null && parentNode == null){
            console.log('sc2');
            this.root = currNode.right;
            break;
          }

          //Scenario 3 - only left node for current node
          if(currNode.left == null && currNode.right == null){
            console.log('sc3');
            if(parentNode.left = currNode){
              parentNode.left = null;
            }else if(parentNode.right = currNode){
              parentNode.right = null;
            }
            break;
          }

          //Scenario 4 - only left node for current node
          if(currNode.left != null && currNode.right == null){
            console.log('sc4');
            if(parentNode == null){
              this.root = currNode.left;
            }else{
              parentNode.left = currNode.left;
            }
            break;
          }

          //Scenario 5 - only right node for current node
          if(currNode.left == null && currNode.right != null){
            console.log('sc5');
            if(parentNode == null){
              this.root = currNode.right;
            }else{
              parentNode.right = currNode.right;
            }
            break;
          }

          //Scenario 6 - both left and right nodes exists
          //find the right childs left most element
          if(currNode.left != null && currNode.right != null){
            console.log('sc6');
            //find and replace the current node with right most element of the current nodes left node
            let removalNode = currNode, leftNode = currNode.left, rightNode = currNode.right;
            let successorParent = null;
            if(leftNode.right!=null){
              console.log('sc6 if');
              currNode = leftNode.left;
              while(currNode.right){
                successorParent = currNode;
                currNode = currNode.right;
              }
              successorParent.right = null;
              if(parentNode == null){
                let tempRootRight = parentNode.right;
                currNode.right = tempRootRight;
                this.root = currNode;
              }else{
                let temp = removalNode.right;
                currNode.right = temp;
                if(parentNode.left == removalNode){
                  parentNode.left = currNode;
                }else if(parentNode.right == removalNode){
                  parentNode.right = currNode;
                }
              }
            }else if(rightNode.left!=null){
              console.log('sc6 else');
              currNode = leftNode.right;
              while(currNode.left){
                successorParent = currNode;
                currNode = currNode.left;
              }
              successorParent.left = null;
              if(parentNode == null){
                let tempRootLeft = parentNode.left;
                currNode.left = tempRootLeft;
                this.root = currNode;
              }else{
                let temp = removalNode.left;
                currNode.left = temp;
                if(parentNode.right == removalNode){
                  parentNode.right = currNode;
                }else if(parentNode.left == removalNode){
                  parentNode.left = currNode;
                }
              }
            }else if(leftNode.right == null){
              if(parentNode.right == removalNode){
                  parentNode.right = leftNode;
                }else if(parentNode.left == removalNode){
                  parentNode.left = leftNode;
                }
            }else if(rightNode.left == null){
              if(parentNode.left == removalNode){
                  parentNode.left = rightNode;
                }else if(parentNode.right == removalNode){
                  parentNode.right = rightNode;
                }
            }
          }
          break; 
        }
      }
    }
  }



  traverseNodes(node){
    const tree = {value:node.value};
    tree.left = node.left === null ? null : this.traverseNodes(node.left);
    tree.right = node.right === null? null: this.traverseNodes(node.right);
    return tree;
  }

}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
bst.remove(4);

console.log(JSON.stringify(bst));
