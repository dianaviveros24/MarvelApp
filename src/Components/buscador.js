import React, { Component } from "react";
import Character from './Character';

const nameStartWith = "";
const ts = "1589430526706";
const hash = "7ebe52f0e5c030274fb7ea7547e5dcfd";
const endpoint = "http://gateway.marvel.com/v1/public/characters?";
const apikey = "8610a72d4872a05fc52ed81860c1d2f0";

//const api_query = `${endpoint}?nameStartWith=${nameStartWith}&apikey=${apikey}`;

/*let Busqueda = ({ }) => {
    <div>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
}*/

class Buscador extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            busqueda: "",
        };
    }

    //Una vez cargue la página muestra un grupo incial de resultados por defecto
    componentDidMount() {
        fetch(`${endpoint}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
            .then((res) => {
                return res.json();
            })
            .then((myJson) => {
                this.setState({
                    data: myJson.data.results,
                });
            });
    }

    //Click en buscar
    handleclick(e) {
        let busqueda = this.state;
        e.preventDefault();
        if (!busqueda) {
            return this.setState({ error: "Write something..." })
        }
        fetch(`${endpoint}nameStartWith&=${busqueda}&ts=${ts}&apikey=${apikey}&hash=${hash}`)
            .then((res) => {
                return res.json();
            })
            .then((myJson) => {
                this.setState({
                    data: myJson.data.results,
                });
            });
    }


    render() {
        return(
        <div>
            {this.state.data.map((character) => {
                return (
                    <Character
                        key={character.id}
                        image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        name={character.name}
                        comics={character.comics.items.map((item) => {
                            return(
                                item.name
                            )
                        })}
                    />
                )
            })}
        </div>
        );
    }
}

export default Buscador;
