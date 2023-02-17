import PropTypes from 'prop-types';
import { ContactElem } from 'components/ContactElem/ContactElem';

export function ContactsList({list, onDelContact}) {
    console.log(list);
    return (
        <ul>
            {list.map(({id, name, number}) => {
                return (<ContactElem id={id} name={name} number={number} onDelCnt={onDelContact}/>)
            })}
        </ul>
    )
}