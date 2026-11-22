import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  /*
  1 - GET/users
  2 - GET/users/:id
  3 - POST/users
  4 - PATCH/users/:id
  5 - DELETE/users/:id
  */

  // 1 - GET/users
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  // 2 - GET/users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // 3 - POST/users
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // 4 - PATCH/users/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  // 5 - DELETE/users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
