
import { User } from "../types/User";

type Error = {
    [key: string]: string;
}

export const Validate = (data: User) => {
    const errors: Error = {};

    if(!data.name){
        errors["name"]= "o nome e obrigatorio"
    }
    
    if(!data.email){
        errors["email"] = "o e-mail é obrigatorio"
    }
    
    if (!data.agree){
        errors["agree"] = "Voce não concordou com os termos"
    }
    return errors;
}
