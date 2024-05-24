import { getApiDocs } from 'src/backend/lib/swagger';
import ReactSwagger from './Swagger';

const ApiDocs = async () => {
  const spec = await getApiDocs();
  return (
    <section className="w-full">
      <ReactSwagger spec={spec} />
    </section>
  );
};

export default ApiDocs;
