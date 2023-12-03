const users = [
  { name: 'Ahmad', age: 30 },
  { name: 'Yasser', age: 28 },
  { name: 'Jarle', age: 35 },
  { name: 'Svein', age: 61 },
];

// 1. Create a new array of all the users above 28 using a forEach loop
const usersAbove28 = [];
users.forEach(user => {
  if (user.age > 28) {
    usersAbove28.push(user);
  }
});

// 2. Print the array that you've created
console.log(usersAbove28);

// 3. You can upload your HTML and JS files to a GitHub repository by creating a new repository on GitHub,
//    and then using the Git commands to push your files. Below is a simple example:

//    Initialize a new Git repository in your project folder
//    git init

//    Add your files to the repository
//    git add your-html-file.html your-js-file.js

//    Commit the changes
//    git commit -m "Initial commit"

//    Create a new repository on GitHub

//    Add the remote repository URL
//    git remote add origin your-github-repository-url.git

//    Push your changes to GitHub
//    git push -u origin master
