import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Col,
} from 'react-materialize';
import {
    Field,
    reduxForm,
    change,
    getFormValues,
} from 'redux-form';
import {connect} from 'react-redux';
import PaperWallet from "./PaperWallet";
import RaiBlocksGenerator from '../helpers/RaiBlocksGenerator';
import InputField from '../helpers/Field';

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            public_key: null,
            private_key: null,
            seed: null,
            art: "nanoDarkBlue",
        };
    }

    componentWillMount () {
        this.props.initialize({
            index_account: 0
        });
    }

    renderPaperWallet() {
        return (
            <div className="center-align">
                <PaperWallet publicKey={this.state.public_key}
                             privateKey={this.state.private_key}
                             seed={this.state.seed}
                             indexAccount={this.state.index_account}
                             art={this.props.arts[this.state.art]}/>
                <br/>
                <div>
                    <img src={this.props.arts['nanoDarkBlue'].art} width={100}
                         onClick={() => this.setState({art: "nanoDarkBlue"})}
                         className={this.state.art === "nanoDarkBlue" ? "artSelected" : "artNotSelected"}/>
                    <img src={this.props.arts['raiblocks'].art} width={100}
                         onClick={() => this.setState({art: "raiblocks"})}
                         className={this.state.art === "raiblocks" ? "artSelected" : "artNotSelected"}/>
                </div>
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

    renderBlockChainBalanceButton() {
        if(!this.props.formStates || this.props.formStates.public_key === undefined ) {
            return null;
        }
        return (
            <div>
                <a href={'https://raiblocks.net/account/index.php?acc=' + this.props.formStates.public_key} target="_blank">
                    Check this account balance on the blockchain!
                </a>
                <br/>
                <label>{this.props.formStates.public_key}</label>
            </div>
        );
    }

    onSubmit(values) {
        let raiBlocksGenerator = new RaiBlocksGenerator();
        if (!raiBlocksGenerator._isValidSeed(values.seed)) {
            alert("This is not a valid SEED!");
            return null;
        }
        this.setState({
            public_key: values.public_key,
            private_key: values.private_key,
            seed: values.seed.toUpperCase(),
            index_account: values.index_account,
        });
    }

    generateWallet(seed, indexAccount) {
        let raiBlocksGenerator = new RaiBlocksGenerator();
        if (raiBlocksGenerator._isValidSeed(seed) && raiBlocksGenerator._isValidIndexAccount(indexAccount)) {
            this.props.changeFieldValue('public_key', raiBlocksGenerator.generatePublicKey(seed, indexAccount));
            this.props.changeFieldValue('private_key', raiBlocksGenerator.generatePrivateKey(seed, indexAccount));
            this.props.changeFieldValue('seed', seed);
        }
    }

    isPublicKeyFromSeed(seed, publicKey, indexAccount = 0) {
        const raiBlocksGenerator = new RaiBlocksGenerator();
        if (!seed) return false;
        if (!raiBlocksGenerator._isValidSeed(seed)) return false;
        return raiBlocksGenerator.generatePublicKey(seed, indexAccount) === publicKey;
    }

    isPrivateKeyFromSeed(seed, privateKey, indexAccount = 0) {
        const raiBlocksGenerator = new RaiBlocksGenerator();
        if (!seed) return false;
        if (!raiBlocksGenerator._isValidSeed(seed)) return false;
        return raiBlocksGenerator.generatePrivateKey(seed, indexAccount) === privateKey;
    }

    maxIndexAccount = Math.pow(2, 32) - 1;
    required = value => (value ? undefined : 'Required');
    length64 = value => (value && value.length === 64 ? undefined : 'Seed must have exactly 64 characters! Total: ' + value.length);
    hexadecimal = value => (new RaiBlocksGenerator()._isHexadecimal(value) ? undefined : 'Just hexadecimal characters (0-9 or A-F)!');
    validPublicKeyFromSeed = (value, allValues) => this.isPublicKeyFromSeed(allValues.seed, value, allValues.index_account) ? undefined : 'This public key is not compatible with the SEED! Insert a valid SEED and the public key will be generated automaticaly!';
    validPrivateKeyFromSeed = (value, allValues) => this.isPrivateKeyFromSeed(allValues.seed, value, allValues.index_account) ? undefined : 'This private key is not compatible with the SEED! Insert a valid SEED and the private key will be generated automaticaly!';
    isInValidIndexAccountRange = value => (value >= 0 && value <= this.maxIndexAccount ? undefined : '0 - 4.294.967.295');

    renderInputForm() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <label>The public key and private key is generated automatically based on the SEED!</label>
                    <br/><br/>
                    <Row>
                        <Field
                            name="seed"
                            type="text"
                            icon="lock"
                            s={12}
                            m={10}
                            label="Seed (Top Secret)"
                            placeholder={"0000000000000000000000000000000000000000000000000000000000000000"}
                            validate={[this.required, this.hexadecimal, this.length64]}
                            component={InputField}
                            onChange={(event) => {
                                let seed = event.target.value;
                                let indexAccount = this.props.formStates ? this.props.formStates.index_account : undefined;
                                this.generateWallet(seed, indexAccount);
                            }}
                            style={{textTransform: "uppercase"}}
                        />
                        <Field
                            name="index_account"
                            type="number"
                            icon="format_list_numbered"
                            s={12}
                            m={2}
                            label="Account Number"
                            placeholder={"0"}
                            min={0}
                            max={this.maxIndexAccount}
                            validate={[this.isInValidIndexAccountRange]}
                            component={InputField}
                            onChange={(event) => {
                                let seed = this.props.formStates ? this.props.formStates.seed : undefined;
                                let indexAccount = event.target.value;
                                this.generateWallet(seed, indexAccount);
                            }}
                        />
                    </Row>
                    <Row>
                        <Field
                            name="private_key"
                            type="text"
                            icon="account_balance_wallet"
                            s={12}
                            label="Private Key"
                            placeholder={"9F0E444C69F77A49BD0BE89DB92C38FE713E0963165CCA12FAF5712D7657120F"}
                            validate={[this.required]}
                            warn={[this.validPrivateKeyFromSeed]}
                            component={InputField}
                        />
                    </Row>
                    <Row>
                        <Field
                            name="public_key"
                            type="text"
                            icon="call_received"
                            s={12}
                            label="Public Key"
                            placeholder={"xrb_3i1aq1cchnmbn9x5rsbap8b15akfh7wj7pwskuzi7ahz8oq6cobd99d4r3b7"}
                            validate={[this.required]}
                            warn={[this.validPublicKeyFromSeed]}
                            component={InputField}
                        />
                        { this.renderBlockChainBalanceButton() }
                    </Row>
                    <br/>
                    <br/>
                    <div>
                        <Button waves='light' className="orange" onClick={(event) => {
                            let seed = new RaiBlocksGenerator().generateSeed();
                            let indexAccount = this.props.formStates ? this.props.formStates.index_account : undefined;
                            this.generateWallet(seed, indexAccount);
                            event.preventDefault();
                        }}>
                            <Icon left>gesture</Icon>
                            Generate a random wallet now!
                        </Button>
                        <br/>
                        <div style={{color: "#AAA"}}>
                            (Public Key / Private Key / Seed)
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
        if (this.state.public_key && this.state.private_key && this.state.seed) {
            return this.renderPaperWallet();
        } else {
            return this.renderInputForm();
        }
    }

    render() {
        return (
            <div style={{padding: 16}}>
                { this.renderGenerator() }
            </div>
        );


    }
}


function mapStateToProps(state) {
    return {
        arts: state.arts,
        formStates: getFormValues('generator')(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeFieldValue: function (field, value) {
            dispatch(change('generator', field, value));
        },
    }
}

export default reduxForm({
    form: 'generator'
})(
    connect(mapStateToProps, mapDispatchToProps)(Generator)
);