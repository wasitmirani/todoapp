import {Document} from "mongoose";

export interface UserInterface extends Document{
    id:number,
    name:string,
    email:string,
    password:string,
    created_at:Date,
    updated_at:Date
}
