/* eslint-disable no-use-before-define */
import React, { useState } from 'react'; // eslint-disable-line
import Form from './Partials/Form';
import { IoIosAddCircleOutline } from "react-icons/io";

const defaultConfig = () => ({
  name: '',
  description: '',
  probable_harvest_date: '', 
});

export default function CultivationCreate() {
  const [newCultivation, setNewCultivation] = useState(defaultConfig());
  const [errors, setErrors] = useState({});

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value;
    const name = e?.target?.name ?? fieldName;

    setNewCultivation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit: ", newCultivation)
    // mutate(tempObj);
  };

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className='border px-8 pb-4 pt-6 bg-white rounded-md'>
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <div className='flex items-center px-4 pt-2 mb-4'>
              <IoIosAddCircleOutline size={25} />
              <h2 className='font-medium text-2xl pl-1.5'>
                Adicionar Cultivo
              </h2>
            </div>

            <Form 
              onSubmit={handleSubmit}
              data={newCultivation} 
              handleInputChange={handleInputChange}
              // errors, 
              // isLoading, 
            />
          </div>
        </div>
      </div>
    </div>
  )
}