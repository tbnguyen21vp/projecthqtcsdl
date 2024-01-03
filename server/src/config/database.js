const mssql = require('mssql');
require('dotenv').config();
const dbConfig = {
  BS: {
    user: process.env.MSSQL_BS,
    password: process.env.MSSQL_BS_PASSWORD,
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT),
    database: process.env.MSSQL_DB,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    trustServerCertificate: true,
  },
  NV: {
    user: process.env.MSSQL_NV,
    password: process.env.MSSQL_NV_PASSWORD,
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT),
    database: process.env.MSSQL_DB,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    trustServerCertificate: true,
  },
  AD: {
    user: process.env.MSSQL_AD,
    password: process.env.MSSQL_AD_PASSWORD,
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT),
    database: process.env.MSSQL_DB,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    trustServerCertificate: true,
  },
  SYS: {
    user: process.env.MSSQL_SYS,
    password: process.env.MSSQL_SYS_PASSWORD,
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT),
    database: process.env.MSSQL_DB,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    trustServerCertificate: true,
  },
  BN: {
    user: process.env.MSSQL_BN,
    password: process.env.MSSQL_BN_PASSWORD,
    server: process.env.MSSQL_SERVER,
    port: parseInt(process.env.MSSQL_PORT),
    database: process.env.MSSQL_DB,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    trustServerCertificate: true,
  },
};

const connectionPools = {};

for (const key in dbConfig) {
  if (dbConfig.hasOwnProperty(key)) {
    const config = dbConfig[key];
    connectionPools[key] = new mssql.ConnectionPool(config);
    connectionPools[key].connect();
    console.log('Create pool '+ key);
  }
}

exports.createConnection = (login) => {
  if (connectionPools.hasOwnProperty(login)) {
    console.log('Connect as ' + login);
    return connectionPools[login];
  } else {
    throw new Error(`Login "${login}" not found in database configuration.`);
  }
};
