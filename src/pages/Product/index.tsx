import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { api } from "../../services/api"
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from "../../contexts/CartContext"
import { toast } from "react-hot-toast"

interface ProductDetail {
    id: number,
    cover: string,
    price: number,
    title: string,
    description: string
}

export function ProductPage() {
    const { id } = useParams<{ id: string }>()
    const [productDetail, setProductDetail] = useState<ProductDetail>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { addItemCart } = useContext(CartContext)

    useEffect(() => {
        async function loadProductDetail() {
            try {
                const response = await api.get(`/products/${id}`)
                setProductDetail(response.data)
                setLoading(false)
                console.log('Itens ===>', response.data)
            } catch (error) {
                console.log('Error loading product detail', error)
            }
        }

        loadProductDetail();
    }, [])

    function handleBuyItem(product: any) {
        toast.success('Produto adicionado no carrinho.')
        addItemCart(product)
    }

    return (
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto">
                {loading ? (
                    <h2>Carregando...</h2>
                ) : (
                    <div className="flex justify-center gap-5">
                        <div className="w-full">
                            <img src={productDetail.cover} />
                        </div>
                        <div className="flex flex-col justify-center items-start w-9/12">
                            <h2 className='font-bold mt-2 mb-2 text-lg'>{productDetail.title}</h2>
                            <p>{productDetail.description}</p>
                            <span className=" mt-5 text-xl font-bold">{productDetail.price?.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                            <button className="mt-4 bg-green-600 p-2 rounded text-white flex items-center" onClick={() => handleBuyItem(productDetail)}>
                                Comprar
                                <BsCartPlus size="35" color="#fff" className="px-2" />
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}
