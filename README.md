# BackEnd

0. Run npm i in both folders (root, client)
1. Run only Backend - npm run server
2. Run Server & client - npm run dev

#### Website Live at - https://indy-wise-task.herokuapp.com/

## React Components

1. Profiles
   Route - '/'
   Gives a list of users fetched from reqres.in

2. ProfileItem
   Profiles uses ProfileItem to render each user

3. Profile
   Route -'/profile/:id'
   Gives one single profile.
   Here we've option to book the user with a particular date and time.
   We've option to cancel booking

### Future Tasks

1. Create Login to do the booking
2. Check Function if user is already booked at that time

## For Testing

1. jest
2. flow-bin - Static Type Checker for Javascript / prop-types
   npm i -D flow-bin
   npm run flow init
   // @flow
   npm run flow
3. Eslint - Extension
   npm i -g eslint
   eslint --init
4. Enzyme - Shallow
5. react-test-renderer - Snapshot - similar to git versioning -For UI
6. Coverage Script
