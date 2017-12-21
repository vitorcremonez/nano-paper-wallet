import React, {Component} from 'react';
import {
    Button,
    Icon,
    Row,
    Input,
} from 'react-materialize';


class Generator extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Input s={12} label="Public account key" validate>
                        <Icon>account_balance_wallet</Icon>
                    </Input>
                </Row>
                <Row>
                    <Input s={12} label="Seed" validate>
                        <Icon>lock</Icon>
                    </Input>
                </Row>
                <Button waves='light' className="cyan">
                    <Icon left>note_add</Icon>
                    Generate your <b>paper wallet</b>
                </Button>
            </div>
        );
    }
}

export default Generator;