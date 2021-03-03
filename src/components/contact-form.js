import React from 'react';

import Button from './button';

import contactFormStyles from './contact-form.module.scss';

export default class ContactForm extends React.Component {
    state = {
        message: '',
        name: ''
    }

    render() {

        let subject = 'allegriaparis.com - message from ' + this.state.name;

        return (
            <div className={contactFormStyles.container}>
                <div className={contactFormStyles.contactBox}>
                    <input placeholder={this.props.intl.formatMessage({ id: 'meta.contact.name' })} value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
                    <textarea placeholder={this.props.intl.formatMessage({ id: 'meta.contact.message' })} value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}></textarea>
                </div>
                <div className={contactFormStyles.centralButton}>
                    <a href={"mailto:delia@allegriaparis.com, mariebulle@allegriaparis.com?subject=" + subject + "&body=" + this.state.message} target="_blank" rel="noopener noreferrer">
                        <Button text={this.props.intl.formatMessage({ id: 'meta.contact.send' })} />
                    </a>
                </div>
            </div>
        )
    }
}