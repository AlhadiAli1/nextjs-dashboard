import clsx from 'clsx';
 
export default function Component({ name }: { name: string }) {
  return (
      <div className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm  h-10' ,
        {
          'bg-gray-100 text-gray-500': name === 'hussein',
          'bg-green-500 text-white': name === 'ali',
        },
      )}
    >
        </div>
    // ...
)}