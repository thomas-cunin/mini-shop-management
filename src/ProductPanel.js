import React, {useState, useEffect} from "react";

function ProductPanel (props) {

    const [state, setState] = useState({
        "id": -1,
        "title": "",
        "price": -1,
        "description": "",
        "category": "",
        "image": ""
      });

    useEffect(() => {
        if (props.details.id != state.id) {
            setState(props.details);
            console.log('INIT State')
        }
    })

    if (props.details && props.panelToggle){
        return (
        <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-6">
                    <div className="card is-horizontal shadow-md transform is-duration-300 hover-shadow-xl hover-translate-y">
                        <div className="card-image">
                            <figure className="image">
                                <img src={state.image}
                                    alt={state.title} />
                            </figure>
                        </div>
                        <div className="card-content p-0 is-flex is-flex-direction-column">
                            <div className="content p-5 has-text-grey-light">
                                <h3>{state.title}</h3>
                               <p className="is-size-6 has-text-weight-normal">{state.description}</p>
                               <h4>{state.price} €</h4>
                               <h4>ID: {state.id}</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column is-6">
                    <div className="field">
                        <label className="label">Nom du produit</label>
                        <div className="control">
                            <input className="input" type="text" value={state.title} onChange={(e) => setState({...state, title: e.target.value})}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Déscription</label>
                        <div className="control">
                            <textarea className="input textarea" maxLength="200" value={state.description} onChange={(e) => setState({...state, description: e.target.value})}/>
                        </div>
                        <p className="help">200 caractères max</p>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <label className="label">Prix</label>
                            <div className="control">
                                <input className="input" type="number" min="0.00" step="any" value={state.price} onChange={(e) => setState({...state, price: e.target.value})}/>
                            </div>
                            <p className="help">en euro €</p>
                        </div>
                        <div className="field">
                            <label className="label">Catégorie(s)</label>
                            <div className="control">
                                <input className="input" type="text" disabled placeholder="Hiver, Froid, Polaire, Cuir..."/>
                            </div>
                            <p className="help">Séparez les catégories par des virgules</p>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">URL de l'image</label>
                        <div className="control">
                            <input className="input" type="text" value={state.image} onChange={(e) => setState({...state, image: e.target.value})}/>
                        </div>
                        
                    </div>
                    <div className="field is-grouped is-grouped-right">
                        <p className="control">
                            <a className="button is-primary">
                                Publier
                            </a>
                        </p>
                        <p className="control">
                            <a className="button is-light">
                                Annuler
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )}
    else {
        return null;
    }
}

export default ProductPanel;

