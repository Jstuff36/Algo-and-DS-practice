class MinHeap {
    constructor(values) {
        this.heap = values || [];
    }

    getChildIndices(parentIdx) {
        if (parentIdx > this.heap.length - 1) {
            throw Error('Index out of bounds');
        } else {
            const leftChildIdx = parentIdx * 2 + 1;
            const rightChildIdx = parentIdx * 2 + 2;
            return [leftChildIdx, rightChildIdx];
        }
    }

    getParentIndex(childIndex) {
        if (childIndex > this.heap.length - 1) {
            throw Error('Index out of bounds');
        } else {
            return Math.floor((childIndex - 1) / 2);
        }
    }

    peak() {
        return this.heap[0];
    }

    heapifyDown(index = 0) {
        let childIndices = this.getChildIndices(index);
        while (this.heap[childIndices[0]] !== undefined) {
            let smallerChildIdx = childIndices[0];
            if (childIndices[1] && this.heap[childIndices[1]] < this.heap[childIndices[0]]) {
                smallerChildIdx = childIndices[1];
            }
            if (this.heap[index] < this.heap[smallerChildIdx]) {
                break;
            }
            this.swap(index, smallerChildIdx);
            index = smallerChildIdx;
            childIndices = this.getChildIndices(smallerChildIdx);
        }
    }

    heapifyUp(index = this.heap.length - 1) {
        let parentIdx = this.getParentIndex(index);
        while (parentIdx !== undefined && this.heap[index] < this.heap[parentIdx]) {
            this.swap(parentIdx, index);
            index = parentIdx;
            parentIdx = this.getParentIndex(index);
        }
    }

    extract() {
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    swap(idx1, idx2) {
        const temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

    getLength() {
        return this.heap.length;
    }

    remove(el) {
        const idx = this.heap.indexOf(el);
        if (idx === -1) {
            return idx;
        };
        this.swap(idx, this.getLength() - 1);
        this.heap.pop();
        this.heapifyDown(idx);
        return el;
    }
}

// Test
let heap = new MinHeap([7, 4, 5, 6, 8]);
heap.heapifyDown();
console.log(heap, 'should equal [4, 6, 5, 7, 8]')
heap.remove(6);
console.log(heap, 'should equal [ 4, 7, 5, 8 ]')
heap = new MinHeap([3, 4, 5, 1]);
heap.heapifyUp();
console.log(heap, 'should equal [1, 3, 5, 4]')