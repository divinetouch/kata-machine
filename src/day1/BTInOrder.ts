function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  if (!curr) return path;

  // recurse

  // recurse
  walk(curr.left, path); // walk left
  path.push(curr.value); // push
  walk(curr.right, path);

  // post
  return path;
}
export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

