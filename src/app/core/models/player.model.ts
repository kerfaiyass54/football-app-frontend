export enum PlayerPosition {
  GK = 'GK',
  DEF = 'DEF',
  MID = 'MID',
  ATT = 'ATT'
}

export enum PlayerStatus {
  ACTIVE = 'ACTIVE',
  INJURED = 'INJURED',
  RETIRED = 'RETIRED'
}

export enum PlayerSituation {
  STARTING = 'STARTING',
  SUBSTITUTE = 'SUBSTITUTE'
}

export interface Player {
  id?: string;
  name: string;
  nationality: string;
  position: PlayerPosition;
  ability: number;
  yearOfBirth: number;
  status: PlayerStatus;
  marketValue: number;
  lineup: PlayerSituation;
  number: number;
  contracts?: string[];
  height: number;
  weight: number;
}
