/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized : true
  
  }
 
 
}

module.exports = nextConfig


// async headers() {
//   return [
//     {
//       source: '/api/geproduct',
//       headers: [
//         {
//           key: 'Referrer-Policy',
//           value: 'strict-origin-when-cross-origin',
//         },
//       ],
//     },
//   ];
// }