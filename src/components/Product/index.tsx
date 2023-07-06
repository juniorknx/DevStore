import { BsCartPlus } from 'react-icons/bs'

export function ProdutoCard({title, price, cover}: any) {
    return (
        <section className="w-full">
            <img src={cover} alt="Logo produto"
                className='w-full rounded-lg max-h-70 mb-2'
            />
            <p className='font-medium mt-2 mb-2'>{title}</p>

            <div className='flex gap-3 items-center'>
                <strong className='text-zinc-700/90'>
                    {price}
                </strong>

                <button className='bg-zinc-900 rounded p-1'>
                    <BsCartPlus size={20} color="#fff" />
                </button>
            </div>
        </section>
    )
}