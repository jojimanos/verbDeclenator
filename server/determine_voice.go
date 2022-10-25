package main

import (
	"fmt"
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
	voice := detemine_voice(true, false, false)
	fmt.Println(voice)
}
