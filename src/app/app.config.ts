import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';


// import awsExports from '../aws-exports';

// Amplify.configure(awsExports);


// Amplify.configure({
//   Auth: {
//     Cognito: {
//       userPoolId : 'ap-south-1_t0B1d6GML',
//       userPoolClientId: '51vhq54kjggnnhc6fkn5fruvgs'
//     }
//   }
// })

// Amplify.configure(awsconfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),provideHttpClient(),
    ]
};


