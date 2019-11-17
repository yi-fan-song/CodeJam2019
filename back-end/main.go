package main

import (
	"codejam2019/back-end/controller"
	"fmt"
	"net/http"
	"os"
)


func main() {
	http.HandleFunc("/", func (w http.ResponseWriter, r *http.Request) {
		_, _ = fmt.Fprintf(w, "Hello World")
	})

	http.HandleFunc("/grocery/list", controller.GroceryListHandler)

	http.HandleFunc("/grocery/transaction", controller.GroceryTransactionHandler)

	if port := os.Getenv("port"); port != "" {
		if err := http.ListenAndServe(port, nil); err != nil {
			panic(err)
		}
	} else {
		if err := http.ListenAndServe(":9990", nil); err != nil {
			panic(err)
		}
	}
}
