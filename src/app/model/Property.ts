import { IPropertyBase } from './IPropertyBase';

export class Property implements IPropertyBase {
  ID!: number;
  SellRent!: number;
  Name!: string;
  PType!: string;
  FType!: string;
  Price!: number;
  BHK!: number;
  BuiltArea!: number;
  City!: string;
  RTM!: number;
  Image?: string;
  CarpetArea?: number;
  Address!: string;
  Address2?: string;
  FloorNo?: string;
  TotalFloor?: string;
  AOP?: string;
  MainEntrance?: string;
  Security?: number;
  Gated?: number;
  Maintenance?: number;
  Posession?: string;
  Description?: string;
  PostedOn!: string;
  PostedBy!: number;
}
