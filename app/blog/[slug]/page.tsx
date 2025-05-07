import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Props) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>Hello World!</p>
    </>
  );
}
