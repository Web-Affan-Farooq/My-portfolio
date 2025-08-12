import {z} from "zod";
const ContactFormSchema = z.object(
    {
        name:z.string("Invalid name").min(2,"Name is required ").max(20,"name can be maximum 20 characters long"),
        email:z.email(),
        message:z.string("Invalid message").min(70,"Message can be at least 70 characters long").max(500,"Message can be maximum 20 characters long"),
    }
).strict();

export default ContactFormSchema