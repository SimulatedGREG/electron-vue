# Read & Write Local Files

One great benefit of using `electron` is the ability to access a user's file system. This enables you to read and write files on the local system. To help avoid Chromiun restrictions and writing to a directory specifically for your application, make sure to take use of `electron`'s APIs, specifically the [`app.getPath(name)`](https://electron.atom.io/docs/api/app/#appgetpathname) function.



### Use Case





