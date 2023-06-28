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
  const userEmail = 'firstName.lastName@cmtelematics.com'; // represents the email address of the user for which the alias will be created
  let alias = {
    alias: 'bruk.ross@cmtelematics.com' // example email address for newUser = Bruk Ross
  };
  try { // block of code that handles potential errors when calling API
    alias = AdminDirectory.Users.Aliases.insert(alias, userEmail); // method responsible for creating alias of specified user
    console.log('Created alias %s for user %s.', alias.alias, userEmail); // success message "Created alias for user .."
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