import { Controller, Get, Param, Post, Req, Delete, Patch } from "@nestjs/common";
import { Request } from "@nestjs/common";
import { log } from "console";

@Controller("/api") // This "/api" is just a prefix.
export class appController {} 