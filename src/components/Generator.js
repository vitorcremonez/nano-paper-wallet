import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Input,
} from 'react-materialize';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import PaperWallet from "./PaperWallet";

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public_key: null,
            account: null,
            seed: null,
        };
    }

    renderPaperWallet() {
        return (
            <div className="center-align">
                <PaperWallet publicKey={this.state.public_key} seed={this.state.seed} />
                <br/>
                <div>
                    <Button waves='light' className="cyan" onClick={() => window.print()}>
                        <Icon left>print</Icon>
                        Print your paper wallet
                    </Button>
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
        console.log(field);
        return (
            <Row>
                <Input {...field} {...field.input} {...field.meta}>
                    <Icon>{field.icon}</Icon>
                </Input>
            </Row>
        );
    }

    generateWallet(event) {
        this.props.changeFieldValue('public_key', 'public_key');
        this.props.changeFieldValue('account', 'account');
        this.props.changeFieldValue('seed', 'seed');
        event.preventDefault();
    }

    renderInputForm() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="public_key"
                        type="text"
                        icon="call_received"
                        s={12}
                        label="Address"
                        validade={true}
                        component={this.renderInput}
                    />
                    <Field
                        name="account"
                        type="text"
                        icon="account_balance_wallet"
                        s={12}
                        label="Account"
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
                    <div>
                        <Button waves='light' className="red" onClick={(event) => this.generateWallet(event)}>
                            <Icon left>gesture</Icon>
                            Generate your wallet now!
                        </Button>
                        <br/>
                        <div style={{color: "#AAA"}}>
                        (Address / Account / Seed)
                        </div>
                    </div>
                    <br/>
                    <div>
                        <Button waves='light' className="cyan">
                            <Icon left>note_add</Icon>
                            Create your <b>paper wallet</b>
                        </Button>
                    </div>
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

function mapDispatchToProps(dispatch) {
    return {
        changeFieldValue: function(field, value) {
            dispatch(change('generator', field, value))
        }
    }
}

export default reduxForm({
    form: 'generator'
})(
    connect(null, mapDispatchToProps)(Generator)
);