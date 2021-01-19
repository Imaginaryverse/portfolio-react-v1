# antonbertilsson.se

## See the site live [here!](https://www.antonbertilsson.se 'www.antonbertilsson.se')

This project is foremost my personal portfolio, and I took the chance to put some new tools in my techstack toolbelt!

The client is built with modern _React_, styled with _Sass_ and is using _react-dom-navigator_ for page to page navigation. API calls are handled with _Axios_. _React Context_ is used for _theming_ and _localization_ settings, following the standard action/dispatch pattern.

The whole project is hosted on _Netlify_, and is using _Netlify Functions_ for hosting backend logic.

The backend consists of a _nodemailer_ instance that sanitizes input and forwards clientside form submits to my email.
