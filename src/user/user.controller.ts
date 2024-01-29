import { Controller, Get, Param, Post, Req, Delete, Patch } from "@nestjs/common";
import { Request } from "@nestjs/common";

@Controller("/user")
export class userController{
    @Get("/user")
    getUser(){
        return "I am a user";
    }
    
    @Get()
    getHelloWorld(){
        return "Hello World";
    }

    @Post()
    store(@Req() req: Request){
        return req.body
    }

    @Patch("/:userId")
    update(@Req() req: Request){
        return req.body
    }

    @Get("/:userId")
    getUserById(@Param() params: {userId: number}){
        return `I am user ${params.userId}` ; 
    }

    @Delete("/:userId")
    deleteUserById(@Param() params: {userId: number}){
        return `Delete user ${params.userId}` ;
    }
}