import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

export const Tournaments: NextPageWithLayout = () => {
  return <div>tournaments</div>;
};

Tournaments.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Tournaments;
