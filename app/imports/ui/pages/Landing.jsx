import React from 'react';
import { Grid, Image, Container, Header, Segment, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        /* Outside to maintain consistent borders. */
        <Container>
          <Container verticalAlign='middle' textAlign='center'>
            <Image id='landing_top_image' fluid src='/images/landing_page_top.JPG'/>
          </Container>
          <Header inverted color='green' textAlign='centered' as={'h1'}>
            Match based on what you are looking for!</Header>
          <Grid>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image fluid src='/images/two_people_running.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <Image fluid src='/images/one_armed_pushups.jpg'/>
              </Grid.Column>
              <Grid.Column>
                <Image fluid src='/images/gym_machines.jpg'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header inverted color='green' textAlign='centered' as={'h1'}>
            Join today and work towards your better self!</Header>
          <Container id='landing_bottom_image'>
            <Segment floated = 'right' compact tertiary textAlign = 'center' id='image_overlay'>
              <Header inverted color='green' textAlign='center' as={'h1'}>Match With <br/> Someone today!<br/> </Header>
              <Button color = 'green' compact size = 'medium'>
                Join Now!
              </Button>
            </Segment>
          </Container>
        </Container>
    );
  }
}

export default Landing;
