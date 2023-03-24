const sql = require("msnodesqlv8");

module.exports = class Database {
  constructor() {
    this.connectionString =
      "server=HENRIQUEPC;Database=EMPRESA;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
  }

  async query(query) {
    return new Promise((resolve, reject) => {
      sql.query(this.connectionString, query, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
}
