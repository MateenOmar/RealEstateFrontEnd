import { IPropertyBase } from './IPropertyBase';

export class Property implements IPropertyBase {
  id!: number;
  sellRent!: number;
  name!: string;
  propertyType!: string;
  furnishingType!: string;
  price!: number;
  bhk!: number;
  builtArea!: number;
  city!: string;
  readToMove!: number;
  image?: string;
  carpetArea?: number;
  address!: string;
  address2?: string;
  floorNo?: string;
  totalFloors?: string;
  age?: string;
  mainEntrance?: string;
  security?: number;
  gated?: boolean;
  maintenance?: number;
  estPossessionOn?: Date;
  description?: string;
}
