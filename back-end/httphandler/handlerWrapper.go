package httphandler

import (
	"net/http"
)

func MakeMethodHandler(f func (w http.ResponseWriter, r *http.Request), method string) func (w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request){
		if r.Method != method {
			return
		}
		f(w, r)
	}
}

func MakeMethodsHandler(f func (w http.ResponseWriter, r *http.Request), methods []string) func (w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request){
		for i := range methods {
			if r.Method != methods[i] {
				return
			}
		}
		f(w, r)
	}
}

func MakeSetHeadersHandler(f func (w http.ResponseWriter, r *http.Request), headers map[string]string) func (w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request){
		for key, val := range headers {
			w.Header().Set(key, val)
		}
		f(w, r)
	}
}