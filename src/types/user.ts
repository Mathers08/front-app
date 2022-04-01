export interface IUser {
  id: number;
  name: string;
  company: ICompany;
}

export interface ICompany {
  name: string;
}