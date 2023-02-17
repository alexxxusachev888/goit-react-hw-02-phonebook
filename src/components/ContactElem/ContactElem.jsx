import PropTypes from 'prop-types';

export function ContactElem({id, name, number, onDelCnt}) {
    return (
        <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={()=> onDelCnt(id)}>delete</button>
        </li>
    )
}