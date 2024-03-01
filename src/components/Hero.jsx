import React from 'react';
import Button from './Button';

function ComponentName() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
            <p>ESTARES GRÁVIDA NÃO SIGNIFICA QUE NÃO POSSAS ESTAR </p>
            <h1 className='uppercase font-semibold text-4xl sm:text-xl md:text-7xl lg:text-8xl'>Em&nbsp;<span className='text-blue-400'>Forma</span></h1>
        </div>
            
      <p clasName='text-sm md:text-base font-light'>Com a EliFFit podes construir os teus <span className='text-blue-400 font-medium'>workouts personalizados, seguros e adequados</span> à tua condição. O plano de exercícios <span className='text-blue-400 font-medium'>adapta-se a ti </span>e não o contrário!</p>

      <Button func={() => {
        window.location.href = '#generate'
      }} text='Aceitar & Começar'></Button>
    </div>
  );
}

export default ComponentName;