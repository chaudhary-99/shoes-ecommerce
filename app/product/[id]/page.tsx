// app/product/[id]/page.tsx
import ProductDetail from './ProductDetail';

export async function generateStaticParams() {
  return Array.from({ length: 12 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  return <ProductDetail productId={params.id} />;
}
