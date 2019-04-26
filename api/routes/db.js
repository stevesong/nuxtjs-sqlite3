import express from 'express'
import sqlite3 from 'sqlite3'

const { Router } = require('express')

// open the database
var db = new sqlite3.Database('./sqlitedb/openspectrum.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message)
  }
  console.log('Connected to the openspectrum database.')
})

db.serialize(function () {

  db.each(`SELECT ID as id, Operator FROM operators`, (err, row) => {
    if (err) {
      console.error(err.message)
    }
    // console.log(row.id + ':\t' + row.Operator)
  })

  const router = Router()

  router.use(express.json())


  router.get('/db', function(req, res, next) {
      res.json({foo: 1})
  })

  router.get('/db/:id', function(req, res, next) {
    let record = req.params.id
    let sql = `SELECT ID as id, Operator FROM operators where id = ${record}`
    console.log(sql)
    db.get(sql, function (err, row) {
      console.log(row.id + ': ' + row.Operator)
      res.json(row)
    })
  })

  module.exports = router
})
