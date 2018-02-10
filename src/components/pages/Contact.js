import React, { Component } from 'react';
import Typography from 'material-ui/Typography/Typography';
import Grid from 'material-ui/Grid/Grid';
import Paper from 'material-ui/Paper/Paper';
import FormExample from '../FormExample';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

class ContactPage extends Component {
    state = {
        users: []
    }
    submit = values => {
        this.setState({users: [...this.state.users, values]})
    }
    render() {
        return (

            <Grid container justify="center" spacing={24}>
                <Grid item md={8}>
                    <Paper style={{padding: 20}}>
                        <Typography type="title" color="inherit">
                            Olá! Bem vindo ao nosso form de contato!
                        </Typography>
                        <Typography paragraph={true} color="textSecondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos hic exercitationem maiores corporis, consequatur cupiditate quas repellat? Fuga itaque vitae alias perspiciatis minus accusantium quod repellat. Expedita molestias repellendus cupiditate?</Typography>
                        <FormExample onSubmit={this.submit}></FormExample>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Second Name</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.users.map((user, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{user.firstName}</TableCell>
                                        <TableCell>{user.secondName}</TableCell>
                                        <TableCell numeric>{user.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default ContactPage;