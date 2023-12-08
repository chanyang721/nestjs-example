import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DappService } from './dapp.service';

@Controller('dapp')
export class DappController {
  constructor(private readonly dappService: DappService) {}
  
}
