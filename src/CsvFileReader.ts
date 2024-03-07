import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { DataReader } from './interface/DataReader';

export class CsvFileReader implements DataReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match: string): string[] => {
        return match.split(',');
      });
  }
}
