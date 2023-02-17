import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
      }

    nameId = nanoid();
    numberId = nanoid();

    handleNameInput = (evt) =>  {
        const {name, value} = evt.target;
        this.setState({ [name]: value })
    }

    handleSubmitForm = (evt) => {
        evt.preventDefault();
        console.log(this.state)
        this.props.onAddContact(this.state);

        this.resetForm();
    }
    resetForm = ()=> {
        this.setState({name: '', number: '', id: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <label htmlFor={this.nameId}>Name</label>
                <input onChange={this.handleNameInput}
                    value={this.state.name}
                    id={this.nameId}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                <label htmlFor={this.numberId}>Number</label>
                <input
                    onChange={this.handleNameInput}
                    value={this.state.number}
                    id={this.numberId}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <button type='submit'> Add contact</button>
            </form>
        )
    }
}