class Node { 
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const weave = (left, right, results = [], prefix = []) => {
    if (left.length === 0 || right.length === 0) {
        results.push(prefix.concat(left).concat(right));
        return results;
    }
    const nextLeft = left.shift();
    prefix.push(nextLeft);
    weave(left, right, results, prefix);
    left.unshift(prefix.pop());

    const nextRight = right.shift();
    prefix.push(nextRight)
    weave(left, right,results, prefix);
    right.unshift(prefix.pop());
    return results;
}

const bstSeq = (node) => {
    if (!node) {
        return [[]];
    }

    const left = bstSeq(node.left);
    const right = bstSeq(node.right)
    const result = [];
    left.forEach(l => {
        right.forEach(r => {
            const weaves = weave(l, r);
            result.push(...weaves.map(weave => [node.val, ...weave]));
        })
    })
    return result
}

const left1Sub = new Node(1)
const right1Sub = new Node(8)
const left1 = new Node(5, left1Sub, right1Sub);
const left2Sub = new Node(13);
const right2Sub = new Node(20);
const right2 = new Node(15, left2Sub, right2Sub);
const root = new Node(10, left1, right2);
console.log(bstSeq(root))