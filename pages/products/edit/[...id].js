import { useRouter } from 'next/router';
import Layout from '/components/Layout';

export default function EditProductPage() {
    const router = useRouter();
    console.log({ router });
    return (
        <Layout>
            edit product form here
       </Layout> 
    );
}