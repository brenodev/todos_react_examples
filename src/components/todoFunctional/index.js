import React, {useState} from 'react';

export default function TodoFunctional() {
    const [items, setItems] = useState ([
        'Tomate', 'Repolho', 'Cenoura'
    ])

    const addItem = (item) => {
        setItems([
            ...items, item
        ])
    }

    const removeItem = () => {
        setItems([
            ...items.slice(1)
        ])
    }

	return (
        <div className="container__lista">
            <p>Minha lista</p>
            <ul className="lista">
    {items.map(item => <li>{item}</li>)}
            </ul>
            <button onClick={() => addItem('Abóbora')}>Adicionar items</button>
            <button onClick={() => removeItem()}>Remover items</button>
        </div>
    )
}
