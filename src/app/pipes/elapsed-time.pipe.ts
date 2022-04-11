import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: any): any {
    let today: Date = new Date(); //get current date and time
    let timeElapsed = Math.abs(today.getTime() - value.getTime())
    let timeCounter = timeElapsed * 0.001
    if (timeCounter >= 1) {
      return timeCounter.toFixed() + " seconds";
    } else {
      return 0;
    }
  }

}

