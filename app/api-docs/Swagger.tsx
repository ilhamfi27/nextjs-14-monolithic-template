'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

type Props = {
  spec: Record<string, any>;
};

export const ReactSwagger: FC<Props> = ({ spec }: Props) => {
  return <SwaggerUI spec={spec} />;
};

export default ReactSwagger;
