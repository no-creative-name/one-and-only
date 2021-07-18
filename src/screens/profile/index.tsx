import { GraphQLResult } from '@aws-amplify/api-graphql';
import {
  Grid, Card, Typography, Box, TextField, CircularProgress, Button,
} from '@material-ui/core';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useState, useEffect } from 'react';
import { LoadingInfo } from '../../components';
import { updateUser } from '../../graphql/mutations';
import { getUser } from '../../graphql/queries';
import { DynamoUser } from '../../models/user';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const putUserData = async (
  data: Partial<DynamoUser>,
): Promise<DynamoUser | undefined> => {
  const user = await Auth.currentAuthenticatedUser();
  const graphqlResult = await API.graphql(graphqlOperation(updateUser, {
    input: { id: user.attributes.sub, ...data },
  })) as GraphQLResult<any>;

  return graphqlResult?.data?.updateUser;
};

const fetchUserData = async (): Promise<DynamoUser | undefined> => {
  const user = await Auth.currentAuthenticatedUser();
  const graphqlResult = await API.graphql(graphqlOperation(getUser, {
    id: user.attributes.sub,
  })) as GraphQLResult<any>;

  return graphqlResult?.data?.getUser;
};

export const ProfileScreen = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [isUpdatingUser, setIsUpdatingUser] = useState(false);
  const [user, setUser] = useState<DynamoUser>();

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  useEffect(() => {
    if (user?.firstName) {
      setFirstName(user?.firstName);
    }
  }, [user]);

  return (
    <LoadingInfo isLoading={!user}>
      <Grid
        item
        xs={9}
        md={6}
      >
        <Typography variant="h2" component="h1">Profile</Typography>
        <Box mt={5}>
          <Card>
            <Box p={3}>
              <b>Email</b>
              <p>{user?.email}</p>
            </Box>
            <Box display="flex" flexDirection="column" p={3}>
              <b>First name</b>
              <TextField
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <Box mt={2}>
                {isUpdatingUser ? <CircularProgress /> : (
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={async () => {
                      setIsUpdatingUser(true);
                      await putUserData({
                        firstName,
                      });
                      setIsUpdatingUser(false);
                    }}
                  >
                    Save
                  </Button>
                )}
              </Box>
            </Box>
          </Card>
        </Box>
      </Grid>
    </LoadingInfo>
  );
};

export default ProfileScreen;
