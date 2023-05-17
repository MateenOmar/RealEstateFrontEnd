import { IPropertyBase } from './IPropertyBase';

export class Property implements IPropertyBase {
  id!: number;
  sellRent!: number;
  name!: string;
  propertyTypeID!: number;
  propertyType!: string;
  furnishingTypeID!: number;
  furnishingType!: string;
  price!: number;
  bhk!: number;
  builtArea!: number;
  cityID!: number;
  city!: string;
  readToMove!: boolean;
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
  estPossessionOn?: string;
  description?: string;
}
