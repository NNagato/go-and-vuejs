package collector

import (
	"time"
	"net/http"
)

type Collector struct {
	client http.Client
}

func NewCollector() *Collector {
	client := http.Client{
		Timeout: 3 * time.Second,
	}
	return &Collector{
		client: client,
	}
}

func (self *Collector) GetData() (uint64, error) {
	return 0, nil
}