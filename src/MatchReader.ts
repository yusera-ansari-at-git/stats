import { CsvFileReader } from './CsvFileReader';
import { MatchData } from './MatchData';
import { MatchResult } from './MatchResult';
import { DataReader } from './interface/DataReader';
import { dateStringToDate } from './utils';

export class MatchReader {
  static fromCsv = (file: string): MatchReader => {
    return new MatchReader(new CsvFileReader(file));
  };
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
