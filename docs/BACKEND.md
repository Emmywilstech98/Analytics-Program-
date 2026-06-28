# Backend Design

## Overview

The backend receives analytics events from the JavaScript SDK and stores them in the database.

## Responsibilities

- Receive events from SDK
- Validate requests
- Attach metadata (timestamp, IP, user-agent)
- Store events in database
- Return success response

## Core Endpoint

POST /events

## Tech Stack

- Node.js
- Express.js
- PostgreSQL

## Design Principle

Keep the backend simple, fast, and scalable.