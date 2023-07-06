export function Cart (){
    return (
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
                <img 
                    src="https://cdn.awsli.com.br/2500x2500/1417/1417526/produto/195071970/fone-de-ouvido-bluetooth-apple-airpods-3o-geracao-mme73am-a-case-carregamento-magsafe-f1-7df82da845.jpg"
                    alt="Logo Produto"
                    className="w-28"
                />

                <strong>Preço da Unidade: R$ 1.000,00</strong>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 rounded font-medium flex items-center justify-center">
                        -
                    </button>
                        2
                    <button className="bg-slate-600 px-2 rounded font-medium flex items-center justify-center">
                        +
                    </button>
                </div>

                <strong className="float-right">
                    Subtotal: R$1.000,00
                </strong>
            </section>

            <p className="font-bold mt-4">Total: R$1.000,00</p>
        </div>
    )
}