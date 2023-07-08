import { useState, useEffect, useContext } from 'react'
import { api } from '../../services/api'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export interface ProductProps {
    id: number,
    title: any,
    description: any,
    price: any,
    cover: any
}

export function Home() {
    const { addItemCart } = useContext(CartContext)
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products')
            setProducts(response.data)
            console.log(products)
        }

        getProducts()
    }, [])

    function handleAddCartItem(product: ProductProps){
        toast.success('Produto adicionado no carrinho.')
        addItemCart(product)
    }

    const navigate = useNavigate()

    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 place-items-end">
                    {products.map((product) => {
                        return (
                            <section key={product.id} className="w-full">
                                <img src={product.cover} alt="Logo produto"
                                    className='w-full rounded-lg max-h-70 mb-2 cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}
                                />
                                <p className='font-medium mt-2 mb-2 cursor-pointer' onClick={() => navigate(`/products/${product.id}`)}>{product.title}</p>

                                <div className='flex gap-3 items-center'>
                                    <strong className='text-zinc-700/90'>
                                        {product.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL"
                                        })}
                                    </strong>

                                    <button className='bg-zinc-900 rounded p-1' onClick={() => handleAddCartItem(product)}>
                                        <BsCartPlus size={20} color="#fff" />
                                    </button>
                                </div>
                            </section>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}