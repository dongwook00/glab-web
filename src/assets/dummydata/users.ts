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
        id: 110,
        alt: 'Image 0',
        url: 'https://images.unsplash.com/photo-1542012252680-7b802edd2570?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 111,
        alt: 'Image 1',
        url: 'https://images.unsplash.com/photo-1541971297127-c4e6f05297da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 112,
        alt: 'Image 2',
        url: 'https://images.unsplash.com/photo-1541946450630-fc09717d534d?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    id: 2,
    nickname: 'Jenny',
    gender: 'female',
    birthday: '1994-01-02',
    location: '서울 서초구',
    about: null,
    height: 167,
    bodyType: '마름',
    jobName: null,
    jobField: '교육직',
    education: '고등학교',
    school: null,
    personality: null,
    religion: '무교',
    drinking: '가끔',
    bloodType: null,
    images: [
      {
        id: 113,
        alt: 'Image 0',
        url: 'https://images.unsplash.com/photo-1600275669177-176b3c586d22?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
      {
        id: 114,
        alt: 'Image 1',
        url: 'https://images.unsplash.com/photo-1600275669197-ae5fdc472fd5?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      },
    ],
  },
  {
    id: 3,
    nickname: '글램좋아',
    gender: 'female',
    birthday: '1998-03-11',
    location: '서울 용산구',
    about: null,
    height: 163,
    bodyType: '마름',
    jobName: null,
    jobField: '회사원',
    education: '대학교',
    school: null,
    personality: null,
    religion: '무교',
    drinking: '자주',
    bloodType: null,
    images: [
      {
        id: 115,
        alt: 'Image 0',
        url: 'https://images.unsplash.com/photo-1595242278852-e4fcbc538f55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
      },
      {
        id: 116,
        alt: 'Image 1',
        url: 'https://images.unsplash.com/photo-1579355464838-11e79541a1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      {
        id: 117,
        alt: 'Image 2',
        url: 'https://images.unsplash.com/photo-1579504922366-14c7aa377700?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      {
        id: 118,
        alt: 'Image 3',
        url: 'https://images.unsplash.com/photo-1563966122622-9d31f24c88c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      {
        id: 119,
        alt: 'Image 4',
        url: 'https://images.unsplash.com/photo-1562894369-193bedce28e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      },
      {
        id: 120,
        alt: 'Image 5',
        url: 'https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80',
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
