// pseudo-code

// Identify necessary scopes that are needed from Directory API documentation
  // Scope for only retrieving users or user aliases. 
// Define a function to create an alias for a new user based on the model 'firstName.LastName@cmtelematics.com'
  // Create new users manually (or use listeners)
// Define a function to send an email to the user's manager
// End Script


/**
 * Creates an alias (nickname) for a user.
 * @see https://developers.google.com/admin-sdk/directory/reference/rest/v1/users.aliases/insert
 */
function createAlias() {
  try { 
    const userEmail = 'userEmail@example.com' // replace with actual email address

    const user = AdminDirectory.Users.get(userEmail); // retrieve user's information from the API

    const firstName = user.name.givenName; // extract user's first name
    const lastName = user.name.familyName; // extract user's last name

    const aliasEmail = firstName + '.' + lastName + '@cmtelematics.com'; // generates alias using user's first/last name

    const alias = { // alias object
      alias: aliasEmail
    };

    const response = AdminDirectory.Users.Aliases.insert(alias, userEmail); // the API call to create the alias for the user

    console.log('Created alias %s for user %s.', response.alias, userEmail); // success message "Created alias for user .."
    
  } 
  catch (err) { // Handles errors that arise
  if (err.code === 'API_RATE_LIMIT_EXCEEDED') { // handles rate limit exceeded error (too many calls in specific period of time)
    console.log('API rate limit exceeded. Please try again later.');
  } 
  else if (err.code === 'USER_NOT_FOUND') { // handles user not found error
    console.log('User with email %s not found.', userEmail);
  } 
  else { // handles misc. errors
    console.log('Failed with error %s', err.message);
  }
}





}