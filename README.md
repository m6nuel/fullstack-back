<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Si nos aparece este error Delete `␍`(eslintprettier/prettier), error de fin de linea
debemos agregar en el Archivo de .eslintrc.js agregar en rules:
```
"prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ]
```
esto quitara el error que nos aparece al final de cada linea de los archivos

## Instalar el modulo de configuracion
Esto permitirá gestionar variables de entorno y otras configuraciones de manera sencilla.
```
yarn add @nestjs/config
```

## Necesitamos class-validator y class-transformer
1.- class-validator: proporciona decoradores para definir reglas de validación en tus clases DTO, como @IsString(), @IsInt(), @IsEmail(), entre otros. Esto permite verificar que los datos recibidos cumplen con el formato y tipo esperado.

2.- class-transformer: permite transformar y serializar objetos, convirtiendo los datos entrantes en instancias de clases y facilitando la transformación de propiedades. Esto es útil para que los datos tengan el formato esperado antes de procesarlos.

Estas bibliotecas son esenciales cuando usas ValidationPipe en NestJS, ya que permiten validar y transformar automáticamente los datos en tus controladores antes de que lleguen al negocio de la aplicación.
```
yarn add class-validator class-transformer
```

## Agregamos el ValidationPipe, cors, setGlobalPrefix
En conjunto, este ValidationPipe ayuda a prevenir inyecciones no deseadas, errores de tipo y simplifica el manejo de datos
main.ts
```
app.setGlobalPrefix('api/v1');

app.enableCors();

app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
```

## Para crear recursos:
Esto creará un recurso con un módulo, controlador y servicio, pero sin archivos de prueba.
```
nest g res Nombre --no-spec
```
 - nest g res: es el comando para generar un recurso en NestJS (abreviatura de nest generate resource). Un recurso incluye el controlador, servicio, y módulo necesarios para manejar una entidad o funcionalidad específica.
 - NOMBRE: el nombre del recurso que se está generando. NestJS generará automáticamente los archivos relacionados con el recurso en una carpeta con este nombre.
 - --no-spec: evita que se generen los archivos de prueba (.spec.ts). Esto es útil si no planeas hacer pruebas unitarias de inmediato o prefieres crearlas manualmente más adelante.

## Instalamos las dependencias para la db
En este caso usaremos postgres
```
yarn add @nestjs/typeorm typeorm pg
```
en caso de usar otra db buscamos la dependencia en la documentacion de typeorm

## Nuestro archivo de variables de entorno .env
```
POSTGRES_HOST="localhost"
POSTGRES_PORT=5432                      --> es el puerto por defecto de postgres
POSTGRES_USERNAME="postgres"            --> usuario de postgres
POSTGRES_PASSWORD="passwordpostgres"    --> password en postgres
POSTGRES_DATABASE="back"                --> nombre de db creada
POSTGRES_SSL="false"
```

## Configuracion de nuestro app.module
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: process.env.POSTGRES_SSL === 'true',
      extra: {
        ssl:
          process.env.POSTGRES_SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
Hacemos la conexión a la db correctamente

## Creamos nuestra entidad
```
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
}
```
### Con su respectivo DTO
```
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
}
```

## Importamos nuestra tabla en la db:
Esto lo hacemos en el user.module.ts:
```
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], --> Con esta linea de codigo ya veremos reflejado nuestra tabla en la db
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

## Para validar una sesión de autenticación de Firebase (ReactFire) en tu backend con NestJS, puedes seguir estos pasos:

1. Configurar Firebase Admin SDK en NestJS para validar el token de sesión.
2. Enviar el token de autenticación desde tu frontend (React) al backend.
3. Validar el token en NestJS y obtener los datos del usuario autenticado

## Creamos un modulo de Auth, para mantener el codigo ordenado
```
nest g module auth
```

## Configura Firebase Admin SDK en NestJS
```
yarn add firebase-admin
```
Las credenciales para inicializar el SDK de Firebase Admin generalmente se colocan en un archivo JSON proporcionado por Firebase. Aquí te explico los pasos para configurarlo y dónde colocar el archivo de credenciales en un proyecto NestJS.

## 1. Descargar el Archivo de Credenciales
 - Ve a la Consola de Firebase.
 - Selecciona tu proyecto.
 - Dirígete a Configuración del proyecto (Project Settings).
 - En la pestaña de Cuentas de servicio (Service accounts), haz clic en Generar una nueva clave privada.
 - Firebase descargará un archivo JSON que contiene las credenciales. Guarda este archivo en un lugar seguro.

## 2. Coloca el Archivo en tu Proyecto
Coloca el archivo JSON de credenciales en un directorio seguro dentro de tu proyecto. Una buena práctica es mantener este archivo fuera de tu sistema de control de versiones (como Git) para protegerlo.

Ejemplo
Crea una carpeta en la raíz de tu proyecto llamada secrets o config y guarda el archivo JSON allí:
```
your-project/
├── src/
├── secrets/
│   └── firebase-adminsdk.json
└── package.json
```

## 3. Cargar el Archivo de Credenciales en Firebase Admin
En el código de inicialización de Firebase Admin, proporciona la ruta al archivo de credenciales. Para mayor seguridad y flexibilidad, puedes cargar esta ruta desde una variable de entorno.

Ejemplo de Inicialización con credential.cert()
Modifica onModuleInit para que use el archivo de credenciales directamente:
```
// src/firebase/firebase-admin.service.ts
import * as admin from 'firebase-admin';
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  onModuleInit() {
    admin.initializeApp({
      credential: admin.credential.cert(
        path.resolve(__dirname, '../../secrets/firebase-adminsdk.json')
      ),
    });
  }

  async verifyToken(token: string) {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
```

## 4. Usar Variables de Entorno para Mayor Seguridad
Para que el archivo de credenciales sea más seguro, puedes usar una variable de entorno para especificar su ruta. Esto evita que la ruta de las credenciales esté directamente en el código fuente.
```
FIREBASE_CREDENTIALS_PATH=./secrets/firebase-adminsdk.json
```

Carga la variable en el código usando process.env:
```
import * as admin from 'firebase-admin';
import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class FirebaseAdminService implements OnModuleInit {
  onModuleInit() {
    const credentialsPath = process.env.FIREBASE_CREDENTIALS_PATH;
    admin.initializeApp({
      credential: admin.credential.cert(credentialsPath),
    });
  }

  async verifyToken(token: string) {
    try {
      return await admin.auth().verifyIdToken(token);
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
```

## 5. Asegúrate de Excluir el Archivo de Credenciales de Git
Para proteger tus credenciales, agrega el archivo JSON al .gitignore para que no se suba a Git:
```
# Excluir credenciales de Firebase
/secrets/firebase-adminsdk.json
```
# Resumen
 - Descarga el archivo JSON de credenciales de Firebase.
 - Colócalo en un directorio seguro dentro de tu proyecto (por ejemplo, secrets/).
 - Carga el archivo en FirebaseAdminService usando admin.credential.cert() y proporciona la ruta.
 - Usa variables de entorno para especificar la ruta del archivo y exclúyelo de Git para mayor seguridad.

