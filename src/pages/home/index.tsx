import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { ProdutoCard } from '../../components/Product'

interface ProductProps {
    id: number,
    title: any,
    description: any,
    price: any,
    cover: any
}

export function Home() {

    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products')
            setProducts(response.data)
            console.log(products)
        }

        getProducts()
    }, [])
    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em Alta</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 place-items-end">
                    {products.map(({title, price, cover}) => {
                        return (
                            <>
                                <ProdutoCard cover={cover} title={title} price={price.toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })} />
                            </>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}