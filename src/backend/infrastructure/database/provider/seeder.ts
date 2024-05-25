import { DatabaseProvider } from '.';

const main = async () => {
  await DatabaseProvider.initialize();
  const dataSource = DatabaseProvider.datasource;
};

main();
