import { useEffect, useState } from "react";
import { formataValor } from "../../components/Main";

export const Finalizar = () => {
    const [total,getTotal] = useState(null);

    function atualizaTotal(carrinho) {
        var total = 0;
        carrinho.forEach(e => {
            total = total + e.total;
        })

        getTotal(total);
    }

    useEffect(() => {
        var carrinhoLocal = localStorage.getItem('carrinho');
        var carrinho = null;

        if ( typeof carrinhoLocal == 'string') {
            carrinho = JSON.parse(carrinhoLocal);
        }

        if (carrinho) {
            getProdutos(carrinho);
            atualizaTotal(carrinho);
        }
    },[]);

    function formatar(valor) {
        valor = parseFloat(valor);
        var total = valor.toLocaleString('pt-br',{minimumFractionDigits: 2});
        total = String(total);
        total = total.replace(".","");
        total = total.replace(",",".");
        return total;
    }

    const [produtos, getProdutos] = useState(null);

    useEffect(() => {
        var carrinho = localStorage.getItem('carrinho');
        var produtos = null;

        if ( typeof carrinho == 'string' ) {
            produtos = JSON.parse(carrinho);
        }

        if ( produtos ) getProdutos(produtos);
        
    },[]);
    
    return(
        <>
            <h1 className="text-center">Finalizar Compra</h1>

            <form className="container" name="pagseguro" method="post" action="https://pagseguro.uol.com.br/v2/checkout/payment.html">
                <h4>Seus Dados</h4>
                <input type="hidden" name="receiverEmail" value="suporte@lojamodelo.com.br"/>
                <input type="hidden" name="currency" value="BRL"/>
                
                <input className="form-control" type="text" name="senderName" placeholder="Digite seu nome completo" required/>
                <br/>
                <input className="form-control" type="text" name="senderEmail" placeholder="Digite seu e-mail" required/>
                <br/>
                
                {
                    produtos ? produtos.map((item,index) => (
                            <div>
                                <input type="hidden" value={item.id} name={'itemId'+(index+1)}/>

                                <input type="hidden" value={item.produto} name={'itemDescription'+(index+1)}/>

                                <input type="hidden" value={formatar(item.valor)} name={'itemAmount'+(index+1)}/>

                                <input type="hidden" value={item.quantidade} name={'itemQuantity'+(index+1)}/>
                            </div>
                        )
                    )
                    :
                    <p>Não esistem itens</p>
                }

                <h1 className="text-center">Revisão da Compra:</h1>
                <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Valor Unit.</th>
                                <th>Qtde</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            { produtos ?
                                produtos.map((item,index) => (
                                    <tr>
                                        <td>{item.produto}</td>
                                        <td>{formataValor(item.valor)}</td>
                                        <td>{item.quantidade}</td>
                                        <td>{formataValor(item.total)}</td>
                                    </tr>
                                ))
                            :
                                <tr>
                                    <td colspan="5">
                                        <p className="alert alert-danger text-center">
                                            Carrinho vazio
                                        </p>
                                    </td>
                                </tr>
                            }
                        </tbody>

                        <tfoot>
                            <tr>
                                <td colSpan="3"><strong>VALOR TOTAL</strong></td>
                                <td colSpan="2"><strong>{formataValor(total)}</strong></td>
                            </tr>
                        </tfoot>
                    </table>

                <button className="btn btn-success" type="submit">Pagamento</button>
            </form>
        </>
    )
}