import dotenv from 'dotenv';


dotenv.config({ path: '.env' });



/**
 * AWS Secret Access Key
 *
 * Represents the AWS Secret Access Key used for authentication.
 * Ensure that the corresponding environment variable (AWS_SECRET_ACCESS_KEY) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_SECRET_ACCESS_KEY in .env file
 * AWS_SECRET_ACCESS_KEY=your_secret_access_key
 */
// export const AWS_SECRET_ACCESS_KEY = String(process.env.AWS_SECRET_ACCESS_KEY);
// if (!AWS_SECRET_ACCESS_KEY) {
//   throw new Error(
//     'AWS_SECRET_ACCESS_KEY is required in the environment variables.'
//   );
// }

