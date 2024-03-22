
const urlInput = document.getElementById("url-checker")
const urlMsg = document.getElementById("checker-output")

let searchVal = ''

const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}(\/[-a-zA-Z0-9()@:%_\+.~#?&//=]*)?\b/gi

const regex = new RegExp(expression)

function throttle(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    };
}

function validateUrlFormat(url) {
    return regex.test(url)
}

function isFile(url) {
    return String(url).split('/').pop().indexOf('.') > -1
}

function isFolder(url) {
    return String(url).split('/').pop().indexOf('.') === -1
}


async function checkUrlExistence(url) {
    if (validateUrlFormat(url)) {

        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const exists = Math.random() < 0.9

        if (exists) {
            document.getElementById("checker-output").innerHTML = "The URL exists"

            if (isFile(url)) {
                document.getElementById("checker-output").innerHTML = "The URL exists and is a file"
            }

            else if (isFolder(url)) {
                document.getElementById("checker-output").innerHTML = "The URL exists and is a folder"
            }

        } else {
            document.getElementById("checker-output").innerHTML = "URL does not exist"
        }
    } else {
        document.getElementById("checker-output").innerHTML = "Invalid URL format"
    }
}


let currentRequest = null

urlInput.addEventListener('input', throttle((e) => {
    const searchVal = e.target.value.trim()

    if (currentRequest) {
        clearTimeout(currentRequest)
    }
    currentRequest = setTimeout(() => {
        checkUrlExistence(searchVal) 
    }, 500);

}));