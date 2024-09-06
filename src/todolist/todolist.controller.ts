import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TodolistService } from './todolist.service';
import { CreateTodolistDto } from './dto/create-todolist.dto';
import { UpdateTodolistDto } from './dto/update-todolist.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guard/role.guard';
import { Role } from 'src/entities/enum/role.enum';
import { Roles } from 'src/guard/role';
import { user } from 'src/entities/user.entity';
import { Request } from 'express';

@Controller('todo')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Post()
  @UseGuards(AuthGuard(),RoleGuard)
  @Roles('user', 'admin')
  create(@Body() createTodolistDto: CreateTodolistDto, @Req()req:Request) {
    return this.todolistService.create(createTodolistDto, req.user as user);
  }

  @Get()
  findAll() {
    return this.todolistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todolistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodolistDto: UpdateTodolistDto) {
    return this.todolistService.update(+id, updateTodolistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todolistService.remove(+id);
  }
}
