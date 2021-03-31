const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: "5432"
});


pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;", (err, res) => {
    console.log(err, res);
    pool.end();
  });