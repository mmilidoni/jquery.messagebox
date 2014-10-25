
# jQuery.messagebox

## Requirements

*   [jQuery](http://jquery.com/)
*   [jQuery UI](http://jqueryui.com/)

## How to use it

### Include javascript code and stylesheet

        `
             <script src="js/jquery.messagebox.js"></script>

            <link rel="stylesheet" href="css/jquery.messagebox.css" />
        `

## Examples

### Simple information message

        `$.infoMessage("This is an information message");`

### Information message with success callback

        `$.infoMessage("This is an information message with success callback", function() {alert("success")});`

## Warning message

### Simple warning message

        `$.warningMessage("This is a warning message");`

### Warning message with success callback

        `$.warningMessage("This is a warning message with success callback", function() {alert("success")});`

## Error message

### Simple error message

        `$.errorMessage("This is an error message");`

### Error message with success callback

        `$.errorMessage("This is an error message with success callback", function() {alert("success")});`

