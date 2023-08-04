import { revalidatePath } from "next/cache";

let i = 0;

async function count() {
  'use server';
  i++;
  revalidatePath('/');
}

export default function Home() {
  return (
    <main>
      <h1>Counter</h1>
      <form action={count}>
        <button>count up: {i}</button>
      </form>
    </main>
  )
}
