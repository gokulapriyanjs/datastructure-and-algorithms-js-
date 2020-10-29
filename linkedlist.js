class LinkedListNode{
    constructor(value,next=null){
        this.value=value;
        this.next=next
    }
   
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    prepend(value){
        const newNode=new LinkedListNode(value,this.head);
        this.head=newNode
        if(!this.tail){
            this.tail=newNode
        }
        return this
    }
    append(value){
        const newNode=new LinkedListNode(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode

            return this
        }
        this.tail.next=newNode
        this.tail=newNode

        return this;
    }
    delete(value){
        if(!this.head){
            return null
        }
        let deletedNode=null
        while(this.head && this.head.value===value){
            deletedNode=this.head;
            this.head=this.head.next
        }
        let currentNode=this.head
        if(currentNode !==null){
            while(currentNode.next){
               if(currentNode.next.value===value){
                   deletedNode=currentNode.next
                   currentNode.next=currentNode.next.next
               }
               else{
                   currentNode=currentNode.next
               }                
            }
        }
        if(this.tail.value=== value){
            this.tail=currentNode
        }
        return deletedNode
    }
      deleteTail(){
          let deletedTail=this.tail;
          if(this.head===this.tail){
              this.head=null;
              this.tail=null;
              return deletedTail
          }
          let currentNode=this.head
          while(currentNode.next){
              if(!currentNode.next.next){
                  currentNode.next=null
              }else{
              currentNode=currentNode.next      
            }
          }
          this.tail=currentNode
          return deletedTail
      }    
      deleteHead(){
          if(!this.head){
              return null
          }
          const deletedHead=this.head
          if(this.head===this.tail){
              this.head=null;
              this.tail=null
              return deletedHead
          }
          this.head=this.head.next
          return deletedHead
      }
      fromArray(values){
          values.forEach(value=>this.append(value))
          return this;
      }
      toArray(){
          const nodes=[]
          let currentNode=this.head;
          while(currentNode){
              nodes.push(currentNode)
              currentNode=currentNode.next
          }
          return nodes
      }
}
let link=new LinkedList()
link.prepend(3)
link.append(5)
link.append(7)
link.append(8)

link.prepend(1)
link.deleteHead()
link.deleteTail()
link.fromArray([1,2,3,4,5,6])
console.log(link.toArray())