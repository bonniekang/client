import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class StreamCreate extends React.Component {

    renderError({ error, touched }){
        if(touched && error){
            return (
                <div>
                    {error}
                </div>
            )
        }
    }

    renderInput = ({ label, input, meta })=> {
        return (
        <div>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
        </div>
        )
    }

    onSubmit(formValues){
        
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="enter title" />
                <Field name="description" component={this.renderInput} label="enter description"/>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title){
        errors.title = 'You must enter a title';
    }

    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);