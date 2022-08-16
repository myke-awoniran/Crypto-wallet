package main

type Micheal struct {
	name             string
	age              int
	dateOfGraduation int
}

func greetPerson(name string) {
	if name == "micheal" {
		micheal := Micheal("micheal", 21, 2023)
		println(" you have  to be more serious my guy")
	} else {
		println("my name is ", name)
	}
}

func main() {
	greetPerson("micheal")
	println(micheal)
}
