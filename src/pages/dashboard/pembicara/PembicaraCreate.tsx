
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';


type FormData = {
    nama: string;
    role: string;
    foto: string;
   
}
const schema = z.object({
    nama: z.string().min(1, "Nama pembicara harus diisi"),
    role: z.string().min(1, "Role pembicara harus diisi"),
    foto: z.string().min(1, "Foto pembicara harus diisi"),
  
})

const onSubmit = (data: FormData) => {
    console.log(data);
};



export default function PembicaraCreate() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    return (
        <div className="p-6 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
              Add New Pembicara
            </h2>
    
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <div>
        
                <InputText
                    label="Nama"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                 />
                <InputText
                    label="Role"
                    nama="role"
                    register={register}
                    error={errors.role?.message}
                 />
                <InputText
                    label="Foto"
                    nama="foto"
                    register={register}
                    error={errors.foto?.message}
                 />
              </div>
    
             
              <div className="flex justify-start mt-4">
                 <Button type="submit" label="Simpan" />
              </div>
            </form>
          </div>
        </div>
      );
    }