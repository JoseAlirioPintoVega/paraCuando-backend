import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const DetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { detail_id } = router.query;
  return (
    <div>
      <h1 className="text-2xl">
        {' '}
        this page is <span className="text-app-red text-6xl">{detail_id}</span>
      </h1>
    </div>
  );
};

DetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default DetailPage;