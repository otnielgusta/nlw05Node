import { Request, Response } from "express";
import { UserService } from "../services/UserServices";


class UsersController{
  async create(request: Request, response: Response): Promise<Response>{
    const {email} = request.body;
    const usersService = new  UserService();
   const user =  await usersService.create(email);
   try {
     return response.json(user);
     
   } catch (error) {
     return response.json({"error": error.message});
   }
  }
}

export {UsersController}