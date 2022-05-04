export default function hello(world: string = "world"): string {
  return `Hello ${world}!`;
}

console.log(hello("you"));
