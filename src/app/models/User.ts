
import mongoose, {Schema} from "mongoose";
import { UserInterface } from "../interfaces/UserInterface";

// Basic email validation regex pattern
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const UserSchema: Schema<UserInterface> = new Schema({
    name: {
        type: String,
        required: [true,'name is required'],
    },
    email: {
        type: String,
        required: [true,'email is required'],
        unique: true,
        match:[emailRegex,'please enter a valid email address'],
    },
    password: {
        type: String,
        required: [true,'password is required'],
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const UserModal =  (mongoose.models.User as mongoose.Model<UserInterface>)  || mongoose.model('User', UserSchema);

export default UserModal;