import React from 'react';
import { Card, Icon, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Event extends React.Component {
  removeItem(docID) {
    console.log(`item to delete is ${docID}`);
    this.props.Events.remove(docID);
  }

  render() {
    return (
        <Card color='green' centered>
          <Card.Content textAlign='center'>
            <Header as='h3'>
              {this.props.event.date} @ {this.props.event.time}
            </Header>
          </Card.Content>
          <Card.Content>
            <Icon name='thumbtack'/> {this.props.event.type}<br/>
            <Icon name='location arrow'/> {this.props.event.location}<br/>
            <Icon name='user plus'/> {this.props.event.associated}<br/>
          </Card.Content>
          <Card.Content>
            <b>NOTES</b><br/>
            {this.props.event.notes}
          </Card.Content>
          <Card.Content extra textAlign='right'>
            <Icon name='edit'/>
            <Link to={`/editevent/${this.props.event._id}`}>Edit</Link>
            <Icon name='trash'/>
            <Link onClick={() => this.removeItem(this.props.event._id)}>Delete</Link>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Event.propTypes = {
  event: PropTypes.object.isRequired,
  Events: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Event);