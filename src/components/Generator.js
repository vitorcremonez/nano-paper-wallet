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
import BlockChainLinker from './BlockChainLinker';
import RaiBlocksGenerator from '../helpers/RaiBlocksGenerator';
import InputField from '../helpers/Field';

import * as nanocurrency from 'nanocurrency';

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seed: null,
            index: null,
            secret_key: null,
            public_key: null,
            address: null,
            art: "nanoDarkBlue",
        };
    }

    componentWillMount () {
        this.props.initialize({
            index: 0
        });
    }


    renderPaperWallet() {
        return (
            <div className="center-align">
                <PaperWallet
                    seed={this.state.seed}
                    secretKey={this.state.secret_key}
                    publicAddress={this.state.address}
                    index={this.state.index}
                    art={this.props.arts[this.state.art]}
                />
                <br/>
                <BlockChainLinker
                    address={this.state.address}
                />
                <br/>
                <div>
                    <img
                        src={this.props.arts['nanoDarkBlue'].art} width={100}
                        onClick={() => this.setState({art: "nanoDarkBlue"})}
                        className={this.state.art === "nanoDarkBlue" ? "artSelected" : "artNotSelected"}
                    />
                    <img
                        src={this.props.arts['raiblocks'].art} width={100}
                        onClick={() => this.setState({art: "raiblocks"})}
                        className={this.state.art === "raiblocks" ? "artSelected" : "artNotSelected"}
                    />
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

    onSubmit(values) {
        let raiBlocksGenerator = new RaiBlocksGenerator();
        if (!raiBlocksGenerator._isValidSeed(values.seed)) {
            alert("This is not a valid SEED!");
            return null;
        }
        this.setState({
            seed: values.seed.toUpperCase(),
            index: values.index,
            secret_key: values.secret_key,
            public_key: null,
            address: values.address,
        });
    }

    generateWallet = (seed, index) => {
        let raiBlocksGenerator = new RaiBlocksGenerator();
        if (nanocurrency.checkSeed(seed) && raiBlocksGenerator._isValidIndexAccount(index)) {
            const secret_key = nanocurrency.deriveSecretKey(seed, index);
            const public_key = nanocurrency.derivePublicKey(secret_key);
            const address = nanocurrency.deriveAddress(public_key);
            return {
                seed: seed,
                index: index,
                secret_key: secret_key,
                public_key: public_key,
                address: address,
            };
        }
        return null;
    };

    updateForm = (wallet) => {
        if (wallet) {
            this.props.changeFieldValue('seed', wallet.seed);
            this.props.changeFieldValue('index', wallet.index);
            this.props.changeFieldValue('secret_key', wallet.secret_key);
            this.props.changeFieldValue('address', wallet.address);
        }
    };

    isAccountAddressFromSeed(seed, index, address) {
        const wallet = this.generateWallet(seed, index);
        if (wallet) {
            return wallet.address === address;
        }
        return false;
    }

    isSecretKeyFromSeed(seed, index, secret_key) {
        const wallet = this.generateWallet(seed, index);
        if (wallet) {
            return wallet.secret_key === secret_key;
        }
        return false;
    }

    maxIndexAccount = 15;
    required = value => (value ? undefined : 'Required');
    length64 = value => (value && value.length === 64 ? undefined : 'Seed must have exactly 64 characters (Do not choose an easy Seed)! Total: ' + value.length);
    hexadecimal = value => (new RaiBlocksGenerator()._isHexadecimal(value) ? undefined : 'Just hexadecimal characters (0-9 or A-F)!');
    validAccountAddressFromSeed = (value, allValues) => this.isAccountAddressFromSeed(allValues.seed, parseInt(allValues.index), value) ? undefined : 'This account address is not compatible with SEED! Insert a valid SEED and the account address will be generated automaticaly!';
    validPrivateKeyFromSeed = (value, allValues) => this.isSecretKeyFromSeed(allValues.seed, parseInt(allValues.index), value) ? undefined : 'This secret key is not compatible with SEED! Insert a valid SEED and the secret key will be generated automaticaly!';
    isValidIndexAccountRange = value => (value >= 0 && value <= this.maxIndexAccount ? undefined : 0 + ' - ' + this.maxIndexAccount);
    isNumeric = value => (/^[0-9]{1,}$/i.test(value)) ? undefined : 'This is not a number';
    isValidKey = value => nanocurrency.checkKey(value) ? undefined : 'This is not a valid key';
    isValidAddress = value => nanocurrency.checkAddress(value) ? undefined : 'This is not a valid account address';

    renderInputForm() {
        const placeholder_seed = "0000000000000000000000000000000000000000000000000000000000000000";
        const placeholder_wallet = this.generateWallet(placeholder_seed, 0);

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <label>
                        The account address and secret key is generated automatically based on the SEED!
                    </label>
                    <br/>
                    <label>
                        Usually the default account number is 0
                    </label>
                    <br/>
                    <br/>
                    <Row>
                        <Field
                            name="seed"
                            type="text"
                            icon="lock"
                            s={12}
                            m={10}
                            label="Seed (Top Secret)"
                            placeholder={placeholder_wallet.seed}
                            validate={[this.required, this.hexadecimal, this.length64]}
                            component={InputField}
                            onChange={(event) => {
                                const seed = event.target.value;
                                const index = this.props.formStates ? parseInt(this.props.formStates.index) : undefined;
                                const wallet = this.generateWallet(seed, index);
                                this.updateForm(wallet);
                            }}
                            style={{textTransform: "uppercase"}}
                        />
                        <Field
                            name="index"
                            type="number"
                            icon="format_list_numbered"
                            s={12}
                            m={2}
                            label="Account Number"
                            placeholder={placeholder_wallet.index}
                            min={0}
                            max={this.maxIndexAccount}
                            validate={[this.isValidIndexAccountRange, this.isNumeric]}
                            component={InputField}
                            onChange={(event) => {
                                const seed = this.props.formStates ? this.props.formStates.seed : undefined;
                                const index = parseInt(event.target.value);
                                const wallet = this.generateWallet(seed, index);
                                this.updateForm(wallet);
                            }}
                        />
                    </Row>
                    <Row>
                        <Field
                            name="secret_key"
                            type="text"
                            icon="account_balance_wallet"
                            s={12}
                            label="Secret Key"
                            placeholder={placeholder_wallet.secret_key}
                            validate={[this.required, this.isValidKey, this.validPrivateKeyFromSeed]}
                            component={InputField}
                        />
                    </Row>
                    <Row>
                        <Field
                            name="address"
                            type="text"
                            icon="call_received"
                            s={12}
                            label="Public Address"
                            placeholder={placeholder_wallet.address}
                            validate={[this.required, this.isValidAddress, this.validAccountAddressFromSeed]}
                            component={InputField}
                        />
                        <BlockChainLinker
                            address={this.props.formStates ? this.props.formStates.address : undefined}
                        />
                    </Row>
                    <br/>
                    <br/>
                    <div>
                        <Button waves='light' className="orange" onClick={(event) => {
                            const seed = new RaiBlocksGenerator().generateSeed();
                            const index = this.props.formStates ? parseInt(this.props.formStates.index) : undefined;
                            const wallet = this.generateWallet(seed, index);
                            this.updateForm(wallet);
                            event.preventDefault();
                        }}>
                            <Icon left>gesture</Icon>
                            Generate a random wallet now!
                        </Button>
                        <br/>
                        <div style={{color: "#AAA"}}>
                            (Account Address / Secret Key / Seed)
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
        if (this.state.seed && this.state.index!==null && this.state.secret_key && this.state.address) {
            return this.renderPaperWallet();
        } else {
            return this.renderInputForm();
        }
    }

    render() {
        return (
            <div style={{padding: 16}}>
                {this.renderGenerator()}
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