import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Input,
} from 'react-materialize';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PaperWallet from "./PaperWallet";

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public_key: null,
            seed: null,
        };
    }

    printWalletPaper() {
        alert("print");
        window.print();
    }

    renderPaperWallet() {
        return (
            <div className="center-align">
                <PaperWallet publicKey={this.state.public_key} seed={this.state.seed} />
                <br/>
                <Button waves='light' className="cyan" onClick={() => this.printWalletPaper()}>
                    <Icon left>print</Icon>
                    Print your paper wallet
                </Button>
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