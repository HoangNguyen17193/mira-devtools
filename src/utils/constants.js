import React from 'react';

const ROUTES = {
  Home: {
    path: '/',
    key: 'JsonFormatter',
    name: 'Json Formatter'
  },
  JWTParser: {
    path: '/jwt-parser',
    key: 'JWTParser',
    name: 'JWT Parser'
  },
  UUIDGenerator: {
    path: '/uuid-generator',
    key: 'UUIDGenerator',
    name: 'UUID Generator'
  },
  UnixTimeConverter: {
    path: '/unix-time-converter',
    key: 'UnixTimeConverter',
    name: 'UnixTime Converter'
  }
};

export {
  ROUTES
}