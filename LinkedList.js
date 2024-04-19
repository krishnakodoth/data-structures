const Node = (data, next = null) => {
  return {
      data: data,
      next: next
  };
}

function SortedLinkedList() {
  let head = null;

  const insert = (data) => {
      const newNode = Node(data);
      if (!head || data < head.data) {
          newNode.next = head;
          head = newNode;
      } else {
          let current = head;
          while (current.next && data > current.next.data) {
              current = current.next;
          }
          newNode.next = current.next;
          current.next = newNode;
      }
  }

  const printList = () =>{
      let current = head;
      while (current) {
          console.log(current.data);
          current = current.next;
      }
  }

  return { insert,printList };
}

// Example usage:
const sortedList = SortedLinkedList();
sortedList.insert(5);
sortedList.insert(3);
sortedList.insert(5);
sortedList.insert(7);
sortedList.insert(1);
sortedList.insert(9);
sortedList.printList(); // Output: 1, 3, 5, 7, 9
