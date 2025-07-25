// app/product/[id]/page.tsx

import ProductDetail from './ProductDetail';

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
  ];
}

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  return <ProductDetail productId={params.id} />;
}
