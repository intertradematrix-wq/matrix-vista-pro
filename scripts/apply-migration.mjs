import { Client } from 'pg';
import fs from 'fs';

const connectionString = 'postgresql://postgres.sefxaafqvjpmjmewsfuw:JwrealDatabasePassword2026@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres';

async function runMigration() {
  const client = new Client({ connectionString });
  try {
    await client.connect();
    console.log('Connected to DB');
    const sql = fs.readFileSync('supabase/migrations/20260612001500_add_article_is_featured.sql', 'utf8');
    await client.query(sql);
    console.log('Migration applied successfully');
  } catch (err) {
    console.error('Migration failed', err);
  } finally {
    await client.end();
  }
}

runMigration();
