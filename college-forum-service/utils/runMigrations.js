const fs = require('fs');
const path = require('path');
const db = require('../config/db');

async function runMigrations() {
  const migrationFiles = fs.readdirSync(path.join(__dirname, '../migrations'));

  for (const file of migrationFiles) {
    const sql = fs.readFileSync(path.join(__dirname, '../migrations', file), 'utf8');
    try {
      await db.query(sql);
      console.log(`Migration ${file} applied successfully.`);
    } catch (err) {
      console.error(`Failed to apply migration ${file}:`, err);
    }
  }
}

module.exports = runMigrations;
