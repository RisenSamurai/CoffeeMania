package main

import (
	"database/sql"
	_ "github.com/lib/pq"
	"log"
)

func Init() {
	connStr := "postgres://postgres:neosoft@localhost/coffeemania?sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		log.Fatal("Cannot connect to the database:", err)
	}
}
