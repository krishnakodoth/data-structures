// Singly Linked List
// Node object
const Node = (data,next=null) => ({data,next});

const singlyLinkedList = () => {
    let head = null;
    const insert = (data) => {
        const newNode = Node(data,head);
        head = newNode;
    }
    const print = () => {
        let current = head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }
    return {
        insert,print
    }
}


const linkedList = singlyLinkedList();

linkedList.insert(5);
linkedList.insert(3);
linkedList.insert(5);
linkedList.insert(7);
linkedList.insert(1);
linkedList.insert(9);
linkedList.print(); 
