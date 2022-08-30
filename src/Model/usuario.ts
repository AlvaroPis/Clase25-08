import {prop} from "@typegoose/typegoose"
class UsuarioClass {
    @prop()
    public name?: string;
    @prop()
    public username?: string;
    @prop()
    public password?: string;
  }