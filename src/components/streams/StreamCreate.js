import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderInput(formProps){
        return (
        <div>
            <label>{formProps.label}</label>
            <input {...formProps.input} />
        </div>
        )
    }

    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput} label="enter title" />
                <Field name="description" component={this.renderInput} label="enter description"/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);