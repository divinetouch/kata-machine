export default function compare(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null,
): boolean {
  // structurely the same
  if (a === null && b === null) {
    return true;
  }

  // structurely not the same
  if (a === null || b === null) {
    return false;
  }

  // this is a value check
  if (a.value !== b.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}

