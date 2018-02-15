import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "material-ui/Typography/Typography";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Grid from "material-ui/Grid/Grid";
import Paper from "material-ui/Paper/Paper";
import FormExample from "../FormExample";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import { fetchUsersFromStorage, addOnState } from "../../store/actions/contact";

const Fade = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={1000} classNames="fade" key={props.index}>
    {children}
  </CSSTransition>
);

class ContactPage extends Component {
  componentWillMount() {
    this.props.fetchUsersFromStorage();
  }

  submit = contactData => {
    this.props.addOnState(contactData);
  };

  render() {
    const { contacts } = this.props.contacts;
    return (
      <Grid container justify="center" spacing={24}>
        <Grid item md={8}>
          <Paper style={{ padding: 20 }}>
            <Typography type="title" color="inherit">
              Olá! Bem vindo ao nosso form de contato!
            </Typography>
            <Typography paragraph={true} color="textSecondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos hic
              exercitationem maiores corporis, consequatur cupiditate quas
              repellat? Fuga itaque vitae alias perspiciatis minus accusantium
              quod repellat. Expedita molestias repellendus cupiditate?
            </Typography>
            <FormExample onSubmit={this.submit} />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Second Name</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TransitionGroup component={TableBody} className="todo-list">
                {contacts.map((contact, index) => (
                  <Fade key={index}>
                    <TableRow key={index}>
                      <TableCell>{contact.firstName}</TableCell>
                      <TableCell>{contact.secondName}</TableCell>
                      <TableCell numeric>{contact.email}</TableCell>
                    </TableRow>
                  </Fade>
                ))}
              </TransitionGroup>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDistepatchToProps(dispatch) {
  return {
    fetchUsersFromStorage: () => dispatch(fetchUsersFromStorage()),
    addOnState: contactData => dispatch(addOnState(contactData))
  };
}

export default connect(mapStateToProps, mapDistepatchToProps)(ContactPage);
