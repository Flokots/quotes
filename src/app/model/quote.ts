export class Quote {
  showDetails: boolean;
  constructor(
    public id: number,
    public description: string,
    public author: string,
    public submitter: string
  ){
    this.showDetails=false;
  }
}
