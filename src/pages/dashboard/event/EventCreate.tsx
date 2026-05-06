
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';

type FormData = {
    nama: string;
    pembicara: string;
    tanggal: string;
    jam: string;
   
}
const schema = z.object({
    nama: z.string().min(1, "Nama Event harus diisi"),
    pembicara: z.string().min(1, "Pembicara harus diisi"),
    tanggal: z.string().min(1, "Tanggal harus diisi"),
    jam: z.string().min(1, "Jam harus diisi"),
  
})

const onSubmit = (data: FormData) => {
    console.log(data);
};


export default function EvenCreate() {
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
              Add New Event
            </h2>
    
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Input Nama */}
              <div>
        
                <InputText
                    label="Nama Event"
                    nama="nama"
                    register={register}
                    error={errors.nama?.message}
                 />
                <InputText
                    label="Pembicara"
                    nama="pembicara"
                    register={register}
                    error={errors.pembicara?.message}
                 />
                <InputText
                    label="Tanggal"
                    nama="tanggal"
                    register={register}
                    error={errors.tanggal?.message}
                 />
                <InputText
                    label="Jam"
                    nama="jam"
                    register={register}
                    error={errors.jam?.message}
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