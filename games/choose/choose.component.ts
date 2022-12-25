import { Breed, Breeds } from "./../../shared/services/breeds";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-choose",
  templateUrl: "./choose.component.html",
  styleUrls: ["./choose.component.scss"],
})
export class ChooseComponent {
  @ViewChild("buttons", { static: true }) buttons;
  breeds = Breeds;
  get randomDogName() {
    const randomElement =
      this.breeds[Math.floor(Math.random() * this.breeds.length)].dog;
    return randomElement;
  }
  breed: Breed;
  getDogImg() {
    return this.breed.imgs[1];
  }
  constructor() {
    this.breed = this.breeds[Math.floor(Math.random() * this.breeds.length)];
  }
  chooseDog(dog: string, event: PointerEvent & { target: HTMLElement }) {
    const rightDog = this.breed.dogs.indexOf(this.breed.dog, 0);
    this.buttons.el.children[rightDog].style.backgroundColor = "green";
    if (dog !== this.breed.dog) {
      event.target.style.backgroundColor = "red";
    }

    setTimeout(() => {
      this.breed = this.breeds[Math.floor(Math.random() * this.breeds.length)];
    }, 2000);
  }
}
