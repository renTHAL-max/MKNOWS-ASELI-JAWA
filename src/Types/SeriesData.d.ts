export interface TrainingSchedule {
  id: number;
  data: string;
}

export interface TrainingProgramData {
  id: number;
  [programTitle: string]: TrainingSchedule[] | number;
}

export interface SeriesData {
  link?: string;
  Link?: string;
  name: string;
  title: string;
  description?: string;
  data: TrainingProgramData[];
}

export interface ProcessedProgram {
  id: number;
  title: string;
  dates: string[];
}

export interface SeriesDetailData {
  seriesName: string;
  seriesTitle: string;
  seriesDescription?: string;
  programs: ProcessedProgram[];
}
