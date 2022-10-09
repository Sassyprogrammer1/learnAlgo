/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    add(data) {
        let node = new Node(data);
        if(this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while(current !== null) {
                current = current.next;
            }
            current = node;
        }
        this.size++;
    }
    insertAt(data, index) {
        let node = new Node(data);
        if(index < 0 || index > this.size) {
            return;
        } else {
            let current, previous;
            if(index == 0) {
                node.next = current;
                current = node;
            } else {
                let count = 0;
                while(count < index) {
                    count++
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if(index < 0 || index > this.size) {
            return;
        } else {
            let current = this.head;
            let previous, count = 0;
            if(index == 0) {
                current = current.next;
            } else {
                while(count < index) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next
            }
            this.size--;
            return current.data;
        }
    }
    removeElement(element) {
        let current, previous=null;
        current = this.head;
        while(current !== null) {
            previous = current;
            current = current.next;
            if(previous.data === element) {
                if(previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next
        }

        this.size--;
        return -1;
    }
    getSize() {
        return this.size;
    }
    printList() {
       
    }
}

const linkedList = new LinkedList();

let ll = new LinkedList();
let arr = [];
for(var i=1;i<=4;i++) {
    ll.add(i);
}

console.log(ll.getSize());
//console.log(ll.printList());