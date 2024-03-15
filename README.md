# url-checker

The regex that checks the URL is taken from [stackoverflow](https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url) .
It was later modified to also include slash at the end of the url which indicates a folder.

# Testing

The project focuses on checking whether the URL is a file or a folder and it does not include url which end with fragment (ie example.com/article#section). 
It also does not work for a query params. 
Nonetheless, it can be made possible to include them by tweaking the regex but this is a bit out of the problem statement and hence has been avoided. 
