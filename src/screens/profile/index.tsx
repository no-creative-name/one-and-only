import { GraphQLResult } from '@aws-amplify/api-graphql';
import {
  Grid, Card, Typography, Box,
} from '@material-ui/core';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';

import { getUser } from '../../graphql/queries';
import { DynamoUser } from '../../models/user';

const fetchUser = async (userSub: string): Promise<DynamoUser | undefined> => {
  const graphqlResult = await API.graphql(graphqlOperation(getUser, {
    id: userSub,
  })) as GraphQLResult<any>;

  return graphqlResult?.data?.getUser;
};

const fetchUserData = async (): Promise<DynamoUser | undefined> => {
  const user = await Auth.currentAuthenticatedUser();
  return fetchUser(user.attributes.sub);
};

export const ProfileScreen = () => {
  const [user, setUser] = useState<DynamoUser>();

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <Grid
      item
      xs={6}
    >
      <Typography variant="h2" component="h1">Profile</Typography>
      <Box mt={5}>
        <Card>
          <Box p={3}>
            <b>Email Address</b>
            <p>{user?.email}</p>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default ProfileScreen;
