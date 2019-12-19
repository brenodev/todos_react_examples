import React from 'react'

const TodoStateless = ({items}) => {
    return (
        <div className="container__lista">
            <p>Minha lista Stateless</p>
            <ul className="lista">
                {items.map(item => <li>
                    {item}
                </li>)}
            </ul>
        </div>
    )
}
export default TodoStateless