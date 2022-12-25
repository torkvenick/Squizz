import { Breeds } from "./breeds";

export class MainService {
  breeds = Breeds;
  constructor() {
    this.getDogsOptions();
  }

  randomizer(array: any[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  getDogsOptions() {
    const dogsNames: string[] = this.breeds.map((breed) => {
      return breed.dog;
    });
    this.breeds.forEach((breed) => {
      const randomDog1 = this.randomizer(dogsNames);
      const randomDog2 = this.randomizer(dogsNames);
      const randomDog3 = this.randomizer(dogsNames);
      const rightDog = breed.dog;
      const options: string[] = [rightDog, randomDog1, randomDog2, randomDog3];
      breed.dogs = options.sort((a, b) => (Math.random() < 0.5 ? -1 : 1));
    });
  }
}
