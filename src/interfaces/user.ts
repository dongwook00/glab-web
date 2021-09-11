import IImages from './images';

export default interface IUsers {
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
