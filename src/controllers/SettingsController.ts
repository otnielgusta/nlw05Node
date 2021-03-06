import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsServices";



class SettingsController{
    async create(request: Request, response: Response){

        const {chat, username} = request.body;
        const settingsService  = new SettingsService();

    try {

        const settings = await  settingsService.create({chat, username});    
        return response.json(settings);

    } catch (error) {
        return response.status(400).json({"error": error.message});
    }
    }
} 

export {SettingsController}