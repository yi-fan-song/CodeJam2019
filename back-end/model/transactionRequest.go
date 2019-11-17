package model

type TransactionRequest struct {
	Add    []FridgeItem `json:"add"`
	Remove []FridgeItem `json:"remove"`
}
