// if the user visits /invoices/123
import {Form, useLoaderData} from "@remix-run/react";
import {LoaderFunction} from "@remix-run/server-runtime";

export const loader: LoaderFunction = async ({ params }) => {
    // run at server
    console.log(params);
    const pId = params['postId'];
    //
    return {
        data: {
            pId,
            test: 'Maria',
        }
    }
};

export default function Post() {
   const dataArgs = useLoaderData();
   console.log(dataArgs);
   return (
       <main>
          <h1 className="text-3xl font-bold underline">
             Fetching data com loader para o id {dataArgs.id}:
          </h1>
          <p>
             Post cenas
          </p>
       </main>
   );
}
