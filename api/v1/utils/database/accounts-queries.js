const createUserWithPass =
  "INSERT INTO users (email, password) VALUES ($1, crypt($2, gen_salt('md5')))";
  
const changePassword =
  "UPDATE users SET password=crypt($1, gen_salt('md5')) WHERE email=$2 AND id=$3";

const createUserWithoutPass =
  "INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)";

const login =
  "SELECT id, uuid, first_name, last_name,CONCAT(first_name,' ', last_name) AS full_name, email, verified, slug,role, profile_image FROM users WHERE email = $1 AND password = crypt($2, password)";

const checkIfExists = "SELECT * FROM users WHERE email = $1";

const addExperience =
  "INSERT INTO experience(user_id, position, company,description, start_date, end_date , location)VALUES ($1, $2,$3,$4, to_date($5, 'DD-MM-YYYY'),to_date($6, 'DD-MM-YYYY'), $7)";

const updateExperience =
  "UPDATE experience SET position=$1, company=$2,description=$3, start_date=$4, end_date=$5 , location=$6 WHERE id=$7 AND user_id=$8";

const changeRole = "UPDATE public.users SET role=$1 WHERE email=$2";

const getMyProfile =
  " select users.id, first_name ||' '|| last_name as fullname, first_name, last_name, email, phone, github, portfolio, users.location as user_location,  slug, profile_image, position, description, company, experience.location, start_date, end_date from users LEFT JOIN experience ON users.id = experience.user_id WHERE user_id = $1 ORDER BY start_date ASC ";

const updateProfile = "UPDATE users SET first_name=$1, last_name=$2, phone=$3, github=$4, portfolio=$5, location=$6 WHERE id=$7;"


const updateProfilePic = "UPDATE users SET profile_image=$1 where id=$2"

module.exports = {
  createUserWithPass,
  createUserWithoutPass,
  login,
  checkIfExists,
  addExperience,
  updateExperience,
  changeRole,
  getMyProfile,
  updateProfile,
  updateProfilePic,
  changePassword,
};
