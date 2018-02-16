import React, {Component} from 'react';
import {
    Row,
    Input,
    Icon,
} from 'react-materialize';


class Field extends Component {
    render() {
        const field = this.props;
        const {error, warning, touched} = field.meta;
        return (
            <Input
                {...field}
                {...field.input}
                error={
                    error ? error : (warning ? warning : null)
                }
                warning={"asd"}>
                <Icon>{field.icon}</Icon>
            </Input>
        );
    }
}

export default Field;