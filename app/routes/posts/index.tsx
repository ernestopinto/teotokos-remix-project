import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";

export const loader: LoaderFunction = async ({ params }) => ({
  id: params.id,
  data: [
    { id: 0, name: " João", idade: 23 },
    { id: 1, name: " Maria", idade: 53 },
  ],
});

export default function Posts() {
  const dataArgs = useLoaderData();
    console.log(dataArgs);
  return (
    <main>
      <h1 className="text-3xl font-bold underline">
        Fetching Posts
      </h1>
      <div >
        {dataArgs.data.map((a: any) => (
            <div key={a.id}>
                <span><a href={`/posts/${a.id}`}>{a.name}</a></span>
              <span>{a.idade}</span>
            </div>
        ))}
      </div>
    </main>
  );
}
