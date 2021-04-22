import {Router} from "express";
import { MessagesController } from "./controllers/MessagesController";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UserController";





const routes = Router();

const settingsController = new SettingsController();
const userController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", userController.create);

routes.post("/chat", messagesController.create);
routes.get("/chat/:id", messagesController.showByUser)

export {routes};