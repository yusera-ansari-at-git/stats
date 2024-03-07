import { OutputTarget } from './interface/OutputTarget';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
