export class CharacterCollection {
  constructor(public data:string){}

  get length():number {
    return this.data.length;
  }

  compare(leftIndex:number,rightIndex:number):boolean {

    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()

  }

  swap(leftIndex:number,rightIndex:number):void{
    const caracters = this.data.split('');
    const leftHand = this.data[leftIndex];
    caracters[leftIndex] = caracters[rightIndex];
    caracters[rightIndex] = leftHand;

    this.data = caracters.join('')

  }

}