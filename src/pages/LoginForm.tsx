import { useForm } from "react-hook-form";
import { InputText } from "../ui/InputText";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod" ;
import { InputPassword } from "../ui/InputPass";
import Button from "../components/Button";
type FormLogin ={
    email:string;
    password:string;
};

const schema = z.object({
    email : z.string().min(1, "Email harus diisi"),
    password : z.string().min(8, "Password minimal 8 Karakter"),
});

export default function LoginForm() {

    const {register, handleSubmit, formState:{errors}} = useForm<FormLogin>({
        resolver : zodResolver(schema)
    });

    const onSubmit = (data : FormLogin) => {
        console.log(data);
    }
    return (
        <div>
            <div className="w-120 h-100 mx-auto bg-blue-300 mt-50 px-3 rounded-2xl  ">
                <h1 className="text-center text-2xl font-bold mb-10 ">Silahkan Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText 
                    label = "Email"
                    name = "email"
                    register = {register}
                    error = {errors.email?.message}
                    />
                    <InputPassword 
                    label = "Password"
                    name = "password"
                    register = {register}
                    error = {errors.password?.message}
                    />
                    
                    <div>
                        <Button title= "Login" variant="primary"/>
                    </div>
                </form>
            </div>
        </div>

    )
}