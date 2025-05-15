const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const shared = {
  apiBaseUrl: process.env['API_BASE_URL'],
  apiVersion: process.env['API_BASE_VERSION'],
  apiNamespace: process.env['API_NAMESPACE'],
};

const devEnv = `
export const environment = {
  production: false,
  apiBaseUrl: '${shared.apiBaseUrl}',
  apiVersion: '${shared.apiVersion}',
  apiNamespace: '${shared.apiNamespace}'
};
`;

const prodEnv = `
export const environment = {
  production: true,
  apiBaseUrl: '${shared.apiBaseUrl}',
  apiVersion: '${shared.apiVersion}',
  apiNamespace: '${shared.apiNamespace}'
};
`;

fs.writeFileSync(
  path.resolve(__dirname, '../src/environments/environment.ts'),
  devEnv.trimStart()
);
fs.writeFileSync(
  path.resolve(__dirname, '../src/environments/environment.prod.ts'),
  prodEnv.trimStart()
);
