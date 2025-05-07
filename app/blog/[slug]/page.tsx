// type Params = {
//   params: {
//     params:{ slug: string};
//   };
// };
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Slug: {params.slug}</h1>;
  <p>Hello World!</p>
}
