function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (!curr) return path;

  // recurse

  // recurse
  walk(curr.left, path); // walk left
  walk(curr.right, path); // walk right

  // post
  path.push(curr.value); // push
  return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

