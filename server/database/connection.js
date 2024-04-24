const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || "mongodb+srv://Rahma:u0X9qHP4LIs20r0n@cluster0.l8imgkb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

module.exports = async () => {
  try { 
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
