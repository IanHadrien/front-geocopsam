/* eslint-disable no-use-before-define */
import React, { useState } from 'react'; // eslint-disable-line
import Form from './Partials/Form';

const defaultConfig = () => ({
  id_associate: null,
  id_cultivation: null,
  id_mapArea: null,
  name: null,
  planting_date: null,
  previous_culture: null,
});

export default function PlantationCreate() {
  const [newPlantation, setNewPlantation] = useState(defaultConfig());
  const [errors, setErrors] = useState({});

  const handleInputChange = (e, fieldName) => {
    let value = e?.target?.value ?? e?.value;
    const name = e?.target?.name ?? fieldName;

    setNewPlantation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit: ", newPlantation)
    // mutate(tempObj);
  };

  return (
    <div className="w-full md:px-10 sm:px-10 px-8 mb-8 mt-5">
      <div className='border px-8 pb-4 pt-6 bg-white rounded-md'>
        <div className="flex flex-1 flex-col lg:flex-row lg:space-x-2 lg:space-y-0 h-fit">
          <div className="flex flex-1 flex-col text-sm">
            <Form 
              onSubmit={handleSubmit}
              data={newPlantation} 
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