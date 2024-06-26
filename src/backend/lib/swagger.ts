import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/pages/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
      components: {
        securitySchemes: {},
      },
      security: [],
      servers: [{ url: '/api' }],
    },
  });
  return spec;
};
