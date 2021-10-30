import { Client } from 'faunadb';

export const fauna = new Client({
  secret: 'fnAEWzHy9NAAQyQODJQdXF15CA4S_Hg2ho-y7pKF',
  domain: "db.us.fauna.com",
});