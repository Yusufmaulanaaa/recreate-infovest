
import { z } from "zod";
import { InputText } from '../../../components/ui/InputText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';

type FormData = {
    category: string;
   
}
const schema = z.object({
    category: z.string().min(1, "Nama Category harus diisi"),
  
})

const onSubmit = (data: FormData) => {
    console.log(data);
};

export default function CategoryCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    });
    
  return (
  <div className="p-6 max-w-2xl mx-auto">
    
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-red-200/30 blur-2xl rounded-full"></div>

      {/* TITLE */}
      <h2 className="text-3xl font-black mb-6">
        <span className="bg-linear-to-r from-[#802D43] to-red-500 bg-clip-text text-transparent">
          Add New Category
        </span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

        {/* INPUT */}
        <div>
          <InputText
            label="Category"
            nama="category"
            register={register}
            error={errors.category?.message}
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-start mt-4">
          <Button
            type="submit"
            label="Create Category"          />
        </div>

      </form>
    </div>

  </div>
  );
}