import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    try {
      const issuerUrl = process.env.AUTH0_ISSUER_URL.replace(/\/$/, '');
      const jwksUri = `${issuerUrl}/.well-known/jwks.json`;
      
      super({
        secretOrKeyProvider: (request, rawJwtToken, done) => {
          const jwksClient = passportJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 10,
            jwksUri: jwksUri,
            handleSigningKeyError: (err, cb) => {
              cb(err);
            },
          });
          
          jwksClient(request, rawJwtToken, (err, secretOrKey) => {
            if (err) {
              return done(err);
            }
            done(null, secretOrKey);
          });
        },

        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        audience: process.env.AUTH0_AUDIENCE,
        issuer: process.env.AUTH0_ISSUER_URL,
        algorithms: ['RS256'],
      });
    } catch (error) {
      throw error;
    }
  }

  validate(payload: unknown): unknown {
    return payload;
  }
}
