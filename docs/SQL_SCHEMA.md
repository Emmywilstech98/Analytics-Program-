# SQL Schema (PostgreSQL)

## Users

CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

## Websites

CREATE TABLE websites (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name TEXT,
  domain TEXT UNIQUE,
  api_key TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);

## Events

CREATE TABLE events (
  id UUID PRIMARY KEY,
  website_id UUID REFERENCES websites(id),
  session_id TEXT,
  event_type TEXT,
  page TEXT,
  referrer TEXT,
  user_agent TEXT,
  country TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);