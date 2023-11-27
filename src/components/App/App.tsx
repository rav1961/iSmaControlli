import { LABEL_NOT_FOUND } from '../../consts/labels';
import { Layout } from '../../layouts';
import { EquipmentGroup } from '../Equipment';
import { Message } from '../Message';

function App() {
  const data: boolean = true;

  return (
    <Layout header={`Piwnica`}>
      {data ? <EquipmentGroup /> : <Message txt={LABEL_NOT_FOUND} />}
    </Layout>
  );
}

export default App;
