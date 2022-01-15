import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(@Inject(REQUEST) private readonly request) {}

  async getScopes(): Promise<{ scopes: string }> {
    return { scopes: this.request.user.permissions.join(' ') };
  }
}
