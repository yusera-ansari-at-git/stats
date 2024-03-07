import fs from 'fs';

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match: string): string[] => {
        return match.split(',');
      })
      .map(this.mapRow);
  }
  abstract mapRow(row: string[]): TypeOfData;
}
