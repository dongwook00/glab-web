import IUser from '../../interfaces/user';

const users: IUser[] = [
  {
    id: 1,
    nickname: '헬로',
    gender: 'female',
    birthday: '1990-01-02',
    location: '서울 강남구',
    about: '안녕하세요',
    height: 170,
    bodyType: '보통',
    jobName: null,
    jobField: '회사원',
    education: '대학교',
    school: null,
    personality: null,
    religion: '기독교',
    drinking: '가끔',
    bloodType: null,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542012252680-7b802edd2570?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        url: 'https://images.unsplash.com/photo-1541946450630-fc09717d534d?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
];

export default users;
/**
nickname
gender
birthday
job
location
height
education
about

type1
primary
secondary: about

type2
primary
secondary: job, location
tertiary: height, education

type2
primary
secondary: styles
 */
