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
    this.breed = this.mainService.randomizer(this.breeds);
  }

  chooseDog(dog: string, event: PointerEvent & { target: HTMLElement }) {
    this.breed.isChosen = true;
    const chosenBreed = this.breeds.find((breed) => breed.isChosen);
    this.buttonStyleToggle(true);
    if (dog !== this.breed.dog) {
      event.target.style.backgroundColor = "red";
    }

    setTimeout(() => {
      this.buttonStyleToggle(false);
      this.breeds.splice(this.breeds.indexOf(chosenBreed), 1);
      this.breed = this.mainService.randomizer(this.breeds);
    }, 2000);
  }

  buttonStyleToggle(chosen: boolean) {
    const rightDog = this.breed.dogs.indexOf(this.breed.dog, 0);
    return (this.buttons.el.children[rightDog].style.backgroundColor = chosen
      ? "green"
      : "transparent");
  }
}
