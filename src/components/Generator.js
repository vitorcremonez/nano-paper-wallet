import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Input,
} from 'react-materialize';
import {
    Field,
    reduxForm,
    change,
} from 'redux-form';
import { connect } from 'react-redux';
import PaperWallet from "./PaperWallet";
import RaiBlocksGenerator from '../helpers/RaiBlocksGenerator';

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public_key: null,
            private_key: null,
            seed: null,
        };
    }

    renderPaperWallet() {
        return (
            <div className="center-align">
                <PaperWallet publicKey={this.state.public_key} privateKey={this.state.private_key} seed={this.state.seed} />
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
        let raiBlocksGenerator = new RaiBlocksGenerator();
        if(!raiBlocksGenerator._isValidSeed(values.seed)) {
            alert("This is not a valid SEED!");
            return null;
        }
        this.setState({
            public_key: values.public_key,
            private_key: values.private_key,
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

    generateWallet(event) {
        let raiBlocksGenerator = new RaiBlocksGenerator();
        const seed = raiBlocksGenerator.generateSeed();
        const private_key = raiBlocksGenerator.generateIndentifier(seed) ;
        const public_key = raiBlocksGenerator.generateAccountAddress(seed);

        this.props.changeFieldValue('public_key', public_key);
        this.props.changeFieldValue('private_key', private_key);
        this.props.changeFieldValue('seed', seed);

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
                        label="Account Address (Public Key)"
                        placeholder={"xrb_3i1aq1cchnmbn9x5rsbap8b15akfh7wj7pwskuzi7ahz8oq6cobd99d4r3b7"}
                        validade={true}
                        component={this.renderInput}
                    />
                    <Field
                        name="private_key"
                        type="text"
                        icon="account_balance_wallet"
                        s={12}
                        label="Account Identifier (Private Key)"
                        placeholder={"9F0E444C69F77A49BD0BE89DB92C38FE713E0963165CCA12FAF5712D7657120F"}
                        validade={true}
                        component={this.renderInput}
                    />
                    <Field
                        name="seed"
                        type="text"
                        icon="lock"
                        s={12}
                        label="Seed (Top Secret)"
                        placeholder={"0000000000000000000000000000000000000000000000000000000000000000"}
                        validade={true}
                        component={this.renderInput}
                    />
                    <div>
                        <Button waves='light' className="orange" onClick={(event) => this.generateWallet(event)}>
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

    renderGenerator() {
        if(this.state.public_key && this.state.private_key && this.state.seed){
            return this.renderPaperWallet();
        } else {
            return this.renderInputForm();
        }
    }

    render() {
        return(
            <div style={{padding: 16}}>
                { this.renderGenerator() }
            </div>
        );


    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFieldValue: function(field, value) {
            dispatch(change('generator', field, value));
        },
    }
}

export default reduxForm({
    form: 'generator'
})(
    connect(null, mapDispatchToProps)(Generator)
);