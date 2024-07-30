//   Day 17: Data Structures

//   Tasks/Activities:

//   Activity 1: Linked List

//     Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

//     Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList {
  constructor() {
    this.root = null;
    this.next = null;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      let tempNode = this.root;
      while (tempNode) {
        if (!tempNode.next) {
          tempNode.next = newNode;
          return;
        }
        tempNode = tempNode.next;
      }
    }
  }

  remove() {
    let currentNode = this.root;
    let previousNode = null;
    if (currentNode == null) {
      return null;
    }
    if (currentNode.next == null) {
      this.root = null;
      return currentNode.value;
    }
    while (currentNode) {
      if (currentNode.next == null) {
        previousNode.next = null;
        return previousNode ? previousNode.value : null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  print() {
    let currentNode = this.root;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const ll = new LinkedList();

ll.add(4);
ll.add(5);
ll.add(6);
ll.add(7);
ll.add(8);
ll.add(9);
ll.print();
console.log("---------------");
ll.remove();
ll.remove();
ll.print();
console.log("--------Task 1 Completed -------");

//   Activity 2: Stack

//     Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    this.stack[this.stack.length - 1];
  }
}

//     Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
const stack = new Stack();

stack.push("H");
stack.push("E");
stack.push("L");
stack.push("L");
stack.push("O");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log("--------Task 2 Completed -------");

//   Activity 3: Queue

class Queue {
  constructor() {
    this.queue = [];
  }
  add(ele) {
    this.queue.push(ele);
  }

  deQueue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }
}

//     Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element).

//     Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

const q = new Queue();

q.add("page1");
q.add("page2");
q.add("page3");
q.add("page4");
q.add("page4");
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
console.log("front --> ", q.front());

console.log("--------Task 3 Completed -------");

//   Activity 4: Binary Tree

//     Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

//     Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

//   Activity 5: Graph (Optional)

//     Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

//     Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

//   Feature Request:

//     Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.

//     Stack Script: Create a script that implements a stack and uses it to reverse a string.

//     Queue Script: Write a script that implements a queue and simulates a printer queue.

//     Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.

//     Graph Script: Write a script that implements a graph and performs breadth-first search (optional).
