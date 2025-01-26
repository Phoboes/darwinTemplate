import { getHomePage } from "../lib/getHomePage";

export default async function Home() {
  const data = await getHomePage();
  console.log(data);
  return (
    <main>
      <div>
        <h1>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    </main>
  );
}
