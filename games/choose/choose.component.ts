import { MainService } from "./../../shared/services/main.service";
import { Breed, Breeds } from "./../../shared/services/breeds";
import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-choose",
  templateUrl: "./choose.component.html",
  styleUrls: ["./choose.component.scss"],
})
export class ChooseComponent {
  @ViewChild("buttons", { static: true }) buttons;
  breeds = this.mainService.breeds;
  breed: Breed;
  getDogImg() {
    return this.breed.imgs[1];
  }

  constructor(private mainService: MainService) {
    this.breed = this.breeds[Math.floor(Math.random() * this.breeds.length)];
    console.log(this.breeds);
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
