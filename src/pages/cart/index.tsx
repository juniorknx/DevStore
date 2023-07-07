import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Link } from "react-router-dom"

export function Cart() {

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext)

    console.log('csrt ====>', cart)

    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            {cart.length === 0 && (
                <div className="flex justify-center flex-col items-center">
                    <p className="mb-4">Carrinho vazio! :( </p>

                    <Link to="/">
                        <span className="font-bold bg-slate-600 p-2 rounded text-white">Voltar</span>
                    </Link>
                </div>
            )}

            {cart.map((item) => {
                return (
                    <section className="flex items-center justify-between border-b-2 border-gray-300">
                        <img
                            src={item?.cover}
                            alt="Logo Produto"
                            className="w-28"
                        />

                        <strong>Preço da Unidade: {item?.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>

                        <div className="flex items-center justify-center gap-3">
                            <button onClick={() => removeItemCart(item)} className="bg-slate-600 px-2 rounded font-medium flex items-center justify-center">
                                -
                            </button>
                            {item.amount}
                            <button onClick={() => addItemCart(item)} className="bg-slate-600 px-2 rounded font-medium flex items-center justify-center">
                                +
                            </button>
                        </div>

                        <strong className="float-right">
                            Subtotal: {item?.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </strong>
                    </section>
                )
            })}

            {cart.length !== 0 && <p className="font-bold mt-4">Total: {total} </p> }
        </div>
    )
}