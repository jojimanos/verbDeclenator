package main

import (
	"bufio"
	"fmt"
	"net/http"
)

func detemine_voice(active bool, middle bool, passive bool) string {

	var voice string
	if active && middle && passive {
		voice = "all"
	} else if active && middle && !passive {
		voice = "active&middle"
	} else if active && !middle && passive {
		voice = "active&passive"
	} else if !active && middle && passive {
		voice = "middle&passive"
	} else if active && !middle && !passive {
		voice = "active"
	} else if !active && middle && !passive {
		voice = "middle"
	} else if !active && !middle && passive {
		voice = "passive"
	} else {
		voice = "no voice checked"
	}

	return voice
}

func main() {

	resp, err := http.Get("http://localhost:8000/api/voice")
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	fmt.Println("Response status:", resp.Status)

	scanner := bufio.NewScanner(resp.Body)
	for i := 0; scanner.Scan() && i <= 5; i++ {
		fmt.Println(scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		panic(err)
	}

	voice := detemine_voice(true, false, false)
	fmt.Println(voice)
}
