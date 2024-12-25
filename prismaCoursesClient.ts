import { PrismaClient } from './prisma/generated/client_courses';

const prismaCourses = new PrismaClient();

export default prismaCourses;

// import { PrismaClient } from './prisma/generated/client_users'

// declare global {
//     var prismaUsers: any;
//   }

// if (process.env.NODE_ENV === 'production') {
//   prismaUsers = new PrismaClient();
// } else {
//   if (!global.prismaUsers) {
//     global.prismaUsers = new PrismaClient();
//   }
//   prismaUsers = global.prismaUsers;
// }

// export default prismaUsers;