import { MatchData } from '../MatchData';
//analyzer is for performing analysis on loaded data
export interface Analyzer {
  run(matches: MatchData[]): string;
}
