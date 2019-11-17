package controller

import (
	"codejam2019/back-end/httphandler"
	"codejam2019/back-end/model"
	"encoding/csv"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
)

var GroceryListHandler =
	httphandler.MakeSetHeadersHandler(
	httphandler.MakeMethodHandler(
		func(w http.ResponseWriter, r *http.Request) {
			path, _ := filepath.Abs("./back-end/groceryList.csv")

			ioReader, err := os.Open(path)
			if err != nil {
				panic(err)
			}

			reader := csv.NewReader(ioReader)

			m := make(map[string]int)

			for {
				if rec, err := reader.Read(); err == io.EOF {
					break
				} else if err != nil {
					panic(err)
				} else {
					m[rec[0]], err = strconv.Atoi(rec[1])
					if err != nil {
						panic(err)
					}
				}
			}

			var itemArray []model.FridgeItem
			for key, val := range m  {
				itemArray = append(itemArray, model.FridgeItem{Name: key, Quantity: val})
			}

			var items = model.ListResponse{Items: itemArray}
			w.Header().Set("Content-Type", "application/json")
			err = json.NewEncoder(w).Encode(items)
			if err != nil {
				panic(err)
			}
		},
	http.MethodGet),
	map[string]string{
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	})

var GroceryTransactionHandler =
	httphandler.MakeSetHeadersHandler(
	httphandler.MakeMethodHandler(
		func(w http.ResponseWriter, r *http.Request) {
			var req model.TransactionRequest

			reqBody, err := ioutil.ReadAll(r.Body)
			if err != nil {
				panic(err)
			}

			if err := json.Unmarshal(reqBody, &req); err != nil {
				panic(err)
			}

			path, _ := filepath.Abs("./back-end/groceryList.csv")

			file, err := os.Open(path)
			if err != nil {
				panic(err)
			}

			reader := csv.NewReader(file)

			m := make(map[string]int)

			for {
				if rec, err := reader.Read(); err == io.EOF {
					break
				} else if err != nil {
					panic(err)
				} else {
					m[rec[0]], err = strconv.Atoi(rec[1])
					if err != nil {
						panic(err)
					}
				}
			}

			for i := range req.Remove {
				if _, exists := m[req.Remove[i].Name]; exists {
					if q := m[req.Remove[i].Name] - req.Remove[i].Quantity; q <= 0 {
						delete(m, req.Remove[i].Name)
					} else {
						m[req.Remove[i].Name] = q
					}
				}
			}

			for i := range req.Add {
				m[req.Add[i].Name] += req.Add[i].Quantity
			}

			file.Close()
			if err := os.Remove(path); err != nil {
				panic(err)
			}

			file2, err := os.Create(path)

			writer := csv.NewWriter(file2)

			var writeArray [][]string
			var itemArray []model.FridgeItem
			for key, val := range m  {
				writeArray = append(writeArray, []string {key, strconv.Itoa(val)})
				itemArray = append(itemArray, model.FridgeItem{Name: key, Quantity: val})
			}

			if err:= writer.WriteAll(writeArray); err != nil {
				panic(err)
			}
			file2.Close()

			var items = model.ListResponse{Items: itemArray}
			w.Header().Set("Content-Type", "application/json")
			err = json.NewEncoder(w).Encode(items)
			if err != nil {
				panic(err)
			}
		},
	http.MethodPost),
	map[string]string{
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
	})