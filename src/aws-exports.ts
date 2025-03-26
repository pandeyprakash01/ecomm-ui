// const awsmobile = {
//   "aws_project_region": "app-south-1",
//   "aws_cognito_region": "app-south-1",
//   "aws_user_pools_id": "ap-south-1_lFhzwa8Ty",
//   "aws_user_pools_web_client_id": "3n4forqpegmtnhijsf3f705ujs",
//   "oauth": {
//       "domain": "https://ap-south-1lfhzwa8ty.auth.ap-south-1.amazoncognito.com",
//       "scope": [
//           "phone",
//           "email",
//           "openid",
//           "profile",
//           "aws.cognito.signin.user.admin"
//       ],
//       "redirectSignIn": "http://localhost:4200",
//       // "redirectSignOut": "http://localhost:4200/login",
//       "responseType": "code"
//   }
// };

const awsmobile = {
  Auth: {
      region: 'ap-south-1',
      userPoolId: 'ap-south-1_lFhzwa8Ty',
      userPoolWebClientId: '3n4forqpegmtnhijsf3f705ujs',
  }
};

export default awsmobile;