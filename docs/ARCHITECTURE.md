# Analytics Program Architecture

## System Overview

The Analytics Program consists of five major components.

1. Website
2. JavaScript SDK
3. Backend API
4. Database
5. Dashboard

## Data Flow

Visitor

↓

Website

↓

JavaScript SDK

↓

Backend API

↓

Database

↓

Dashboard

## Responsibilities

### Website

Loads the Analytics SDK.

### JavaScript SDK

Collects anonymous analytics events and sends them to the backend.

### Backend API

Receives events, validates them, and stores them.

### Database

Stores websites, events, sessions, and analytics data.

### Dashboard

Displays analytics reports to customers.

## Future Components

- Authentication
- Billing
- Email notifications
- Admin portal
- Public API