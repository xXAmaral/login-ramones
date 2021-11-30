import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


export const Cadastrar = () => {

    const [produto, setProduto] = useState({
       titulo: '',
       descricao: ''
    });

    const valorInput = e => setProduto({ ...produto, [e.target.name]: e.target.value});
    
    const cadProduto = async e =>{
        e.preventeDefault();
        console.log(produto.titulo);
    }

    const [endImg] = useState('./images/photo.png');
    const [image, setImage] = useState('');

    return(
        <div class="container">
            <h1>Cadastre seu produto</h1>
                <form className="footerCadAnuncio" onSubmit={cadProduto}>
                    <label> Titulo: </label>
                    <input type="text" name="titulo" placeholder="Titulo do produto" onChange={valorInput} /> <br /> <br />

                    <label> Imagem: </label>
                    <input type="file" name="image" onChange={e => setImage(e.target.files[0])} /> <br /> <br />

                    {image ? <img src={URL.createObjectURL(image)}alt="Imagem" width="100" height="100" /> : <img 
                    src={endImg} alt="Imagem" width="100" height="100" />} <br /> <br />

                    <label> Descrição: </label>
                    <input type="text" name="descricao" placeholder="Descrição do produto" onChange={valorInput} /> <br /> <br />

                    <button type="submit" class="cadAnuncio">Cadastrar</button>
                </form>
        </div>

    ); 
}