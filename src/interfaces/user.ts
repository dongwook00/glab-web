import IImages from './images';

interface IUsersKey {
  [key: string]: string | number | null | IImages[] | undefined;
}

export default interface IUsers extends IUsersKey {
  id: number;
  nickname: string;
  gender: string;
  birthday: string;
  location: string;
  about: string | null;
  height: number;
  bodyType: string | null;
  jobName: string | null;
  jobField: string | null;
  education: string | null;
  school: string | null;
  personality: string | null;
  religion: string | null;
  drinking: string | null;
  bloodType: string | null;
  images: IImages[];
}
