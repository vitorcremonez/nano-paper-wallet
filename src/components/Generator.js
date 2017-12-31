import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Input,
} from 'react-materialize';
import { QRCode } from 'react-qr-svg';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public_key: null,
            seed: null,
        };
    }

    renderPaperWallet() {
        return (
            <div style={{backgroundColor: "#AAA"}}>
                <div>
                    <b>Public Key:</b>
                </div>
                <div>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 128 }}
                        value={ this.state.public_key }
                    />
                </div>
                <div>
                    { this.state.public_key }
                </div>

                <div>
                    <b>Seed:</b>
                </div>
                <div>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 128 }}
                        value={ this.state.seed }
                    />
                </div>
                <div>
                    { this.state.seed }
                </div>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        this.setState({
            public_key: values.public_key,
            seed: values.seed,
        });
    }

    renderInput(field){
        return (
            <Row>
                <Input {...field} {...field.input} {...field.meta}>
                    <Icon>{field.icon}</Icon>
                </Input>
            </Row>
        );
    }

    renderInputForm() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="public_key"
                        type="text"
                        icon="account_balance_wallet"
                        s={12}
                        label="Public account key"
                        validade={true}
                        component={this.renderInput}
                    />
                    <Field
                        name="seed"
                        type="text"
                        icon="lock"
                        s={12}
                        label="Seed"
                        validade={true}
                        component={this.renderInput}
                    />
                    <Button waves='light' className="cyan">
                        <Icon left>note_add</Icon>
                        Generate your <b>paper wallet</b>
                    </Button>
                </form>
            </div>
        );
    }

    render() {
        if(this.state.public_key && this.state.seed){
            return this.renderPaperWallet();
        }
        return this.renderInputForm();
    }
}


export default reduxForm({
    form: 'Generator'
})(
    connect(null)(Generator)
);