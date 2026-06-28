# Database Design

## Overview

The system uses a relational database to store users, websites, sessions, and events.

## Tables

### Users
Stores customer accounts.

### Websites
Stores tracked websites.

### Sessions
Groups visitor activity into sessions.

### Events
Stores all analytics events.

## Core Principle

All analytics data is stored as events.

## Design Goals

- Fast event insertion
- Simple querying
- Scalable structure
- Privacy-first design