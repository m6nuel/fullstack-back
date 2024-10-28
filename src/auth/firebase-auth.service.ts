import { BadRequestException, Injectable, OnModuleInit } from '@nestjs/common';
import * as admin from 'firebase-admin';
// import * as path from 'path';

@Injectable()
export class FirebaseAuthService implements OnModuleInit {
  onModuleInit() {
    const credentialsPath = process.env.FIREBASE_CREDENTIALS_PATH;
    admin.initializeApp({
      credential: admin.credential.cert(credentialsPath),
      // credential: admin.credential.cert(
      //   path.resolve(
      //     __dirname,
      //     '../../secrets/fullstack-v1-1-firebase-adminsdk-3wgsz-ced31b877a.json',
      //   ),
      // ),
    });
  }

  async verifyToken(token: string) {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      throw new BadRequestException('invalid Token');
    }
  }
}
