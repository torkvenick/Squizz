import { Breeds } from "./breeds";

export class MainService {
  breeds = Breeds;
  breedNames: string[] = this.breeds.map((breed) => breed.dog);
  constructor() {
    this.configureDogsArray();
  }

  randomizer(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  configureDogsArray() {
    this.breeds.forEach((breed) => {
      const rightDog = breed.dog;
      let options = this.jogar(rightDog);
      breed.dogs = options.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));
      breed.isChosen = false;
    });
  }

  getNewBreed() {
    const breed = this.breeds[Math.floor(Math.random() * this.breeds.length)];
    return breed;
  }

  jogar(rightDog: string): Array<string> {
    let arr = [rightDog];
    if (arr.length !== 0) {
      arr = [rightDog];
    }
    while (arr.length < 4) {
      let randomName = this.randomizer(this.breedNames);
      if (!this.wasAlreadyAdded(randomName, arr)) {
        arr.push(randomName);
      }
    }
    return arr;
  }

  private wasAlreadyAdded(randomNumber: string, arr: string[]): boolean {
    return arr.indexOf(randomNumber) !== -1;
  }
}
